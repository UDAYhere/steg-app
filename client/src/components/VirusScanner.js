import React, { useState } from 'react';
import axios from 'axios';
import './Components.css';

function VirusScanner() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
    
    if (file && allowedTypes.includes(file.type)) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setScanResult(null);
      setMessage('');
    } else {
      setMessage('Please select a PNG, JPG, JPEG, or GIF image');
    }
  };

  const handleScan = async (e) => {
    e.preventDefault();
    
    if (!image) {
      setMessage('Please select an image');
      return;
    }

    setLoading(true);
    setMessage('');
    setScanResult(null);

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('/api/steganography/scan', formData);
      setScanResult(response.data);
      
      if (response.data.safe) {
        setMessage('Image is safe to proceed!');
      } else {
        setMessage('Image validation failed');
      }
    } catch (error) {
      setMessage('Error: ' + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="component">
      <h2>Scan Image for Safety</h2>
      <p className="info">Check if your image is safe before processing</p>
      
      <form onSubmit={handleScan}>
        <div className="form-group">
          <label>Select Image (PNG, JPG, JPEG, GIF):</label>
          <input 
            type="file" 
            accept="image/png,image/jpeg,image/jpg,image/gif" 
            onChange={handleImageChange}
            disabled={loading}
          />
        </div>

        {preview && (
          <div className="preview">
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit" disabled={loading || !image}>
          {loading ? 'Scanning...' : 'Scan Image'}
        </button>
      </form>

      {scanResult && (
        <div className={`scan-result ${scanResult.safe ? 'safe' : 'unsafe'}`}>
          <h3>{scanResult.safe ? 'Image is Safe' : 'Warning'}</h3>
          <p>{scanResult.message}</p>
          
          {scanResult.checks && (
            <div className="checks">
              <h4>Validation Checks:</h4>
              <ul>
                <li>File Size: {(scanResult.checks.fileSize / 1024).toFixed(2)} KB - {scanResult.checks.fileSizeOk ? 'Valid' : 'Invalid'}</li>
                <li>File Type: {scanResult.checks.fileType?.toUpperCase()} - {scanResult.checks.isValidImageType ? 'Valid' : 'Invalid'}</li>
                <li>File Signature: {scanResult.checks.validSignature ? 'Valid' : 'Invalid'}</li>
                {scanResult.checks.warning && (
                  <li style={{color: '#f59e0b', fontWeight: '500'}}>{scanResult.checks.warning}</li>
                )}
              </ul>
            </div>
          )}
        </div>
      )}

      {message && <div className={`message ${message.includes('safe to proceed') ? 'success' : 'error'}`}>{message}</div>}
    </div>
  );
}

export default VirusScanner;
