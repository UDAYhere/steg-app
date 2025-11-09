import React, { useState } from 'react';
import axios from 'axios';
import './Components.css';

function ExtractText() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
    
    if (file && allowedTypes.includes(file.type)) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setExtractedText('');
      setMessage('');
    } else {
      setMessage('Please select a PNG, JPG, JPEG, or GIF image');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!image) {
      setMessage('Please select an image');
      return;
    }

    setLoading(true);
    setMessage('');
    setExtractedText('');

    const formData = new FormData();
    formData.append('image', image);
    
    // Add password if provided
    const passwordInput = document.getElementById('extract-password');
    if (passwordInput && passwordInput.value) {
      formData.append('password', passwordInput.value);
    }

    try {
      const response = await axios.post('/api/steganography/extract', formData);
      
      if (response.data.text) {
        setExtractedText(response.data.text);
        setMessage('Text extracted successfully!');
      } else {
        setMessage('No hidden text found in this image');
      }
    } catch (error) {
      const errorMsg = error.response?.data?.error || error.message;
      if (errorMsg.includes('Wrong password')) {
        setMessage('Wrong password or data is not encrypted');
      } else {
        setMessage('Error: ' + errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(extractedText);
    setMessage('Text copied to clipboard!');
  };

  return (
    <div className="component">
      <h2>Extract Hidden Text from Image</h2>
      
      <form onSubmit={handleSubmit}>
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

        <div className="form-group">
          <label>Password (Optional):</label>
          <input 
            type="password"
            id="extract-password"
            placeholder="Enter password if message is encrypted"
            disabled={loading}
            className="password-input"
          />
          <small>Leave empty if message is not encrypted</small>
        </div>

        <button type="submit" disabled={loading || !image}>
          {loading ? 'Extracting...' : 'Extract Hidden Text'}
        </button>
      </form>

      {extractedText && (
        <div className="result">
          <h3>Extracted Text:</h3>
          <div className="extracted-text">
            {extractedText}
          </div>
          <button onClick={copyToClipboard} className="copy-btn">
            Copy to Clipboard
          </button>
        </div>
      )}

      {message && <div className={`message ${message.includes('successfully') || message.includes('copied') ? 'success' : 'error'}`}>{message}</div>}
    </div>
  );
}

export default ExtractText;
