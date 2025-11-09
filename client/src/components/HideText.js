import React, { useState } from 'react';
import axios from 'axios';
import './Components.css';

function HideText() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [capacity, setCapacity] = useState(null);

  const calculateCapacity = (img) => {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        // Each pixel has RGB channels, each can store 1 bit
        // Total bits = width * height * 3
        const totalBits = image.width * image.height * 3;
        // Convert to characters (8 bits per character)
        // Subtract overhead for delimiter and encryption
        const maxChars = Math.floor(totalBits / 8) - 100; // 100 char overhead
        resolve({
          width: image.width,
          height: image.height,
          totalBits: totalBits,
          maxChars: maxChars
        });
      };
      image.src = URL.createObjectURL(img);
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
    
    if (file && allowedTypes.includes(file.type)) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      
      // Calculate capacity
      const cap = await calculateCapacity(file);
      setCapacity(cap);
      
      // Warning for JPEG
      if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
        setMessage('⚠️ Warning: JPEG uses lossy compression. Hidden data may be lost if image is re-saved. PNG is recommended.');
      } else {
        setMessage('');
      }
    } else {
      setMessage('Please select a PNG, JPG, JPEG, or GIF image');
      setCapacity(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!image || !text) {
      setMessage('Please provide both image and text');
      return;
    }

    setLoading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('image', image);
    formData.append('text', text);
    
    // Add password if provided
    const passwordInput = document.getElementById('hide-password');
    if (passwordInput && passwordInput.value) {
      formData.append('password', passwordInput.value);
    }

    try {
      const response = await axios.post('/api/steganography/hide', formData, {
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'hidden-message.png');
      document.body.appendChild(link);
      link.click();
      link.remove();

      setMessage('Text hidden successfully! Download started.');
    } catch (error) {
      setMessage(' Error: ' + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="component">
      <h2>Hide Secret Text in Image</h2>
      
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

        {capacity && (
          <div className="capacity-info">
            <h3>Image Capacity</h3>
            <div className="capacity-details">
              <div className="capacity-row">
                <span>Image Size:</span>
                <span>{capacity.width} × {capacity.height} pixels</span>
              </div>
              <div className="capacity-row">
                <span>Maximum Capacity:</span>
                <span>{capacity.maxChars.toLocaleString()} characters</span>
              </div>
              <div className="capacity-row">
                <span>Current Message:</span>
                <span className={text.length > capacity.maxChars ? 'over-limit' : 'within-limit'}>
                  {text.length.toLocaleString()} characters
                </span>
              </div>
            </div>
            
            <div className="capacity-bar-container">
              <div 
                className={`capacity-bar ${text.length > capacity.maxChars ? 'over-limit' : ''}`}
                style={{ width: `${Math.min((text.length / capacity.maxChars) * 100, 100)}%` }}
              ></div>
            </div>
            
            <div className="capacity-status">
              {text.length === 0 && (
                <span className="status-neutral">Enter your message to see usage</span>
              )}
              {text.length > 0 && text.length <= capacity.maxChars * 0.7 && (
                <span className="status-good">
                  ✓ {((text.length / capacity.maxChars) * 100).toFixed(1)}% used - Plenty of space
                </span>
              )}
              {text.length > capacity.maxChars * 0.7 && text.length <= capacity.maxChars && (
                <span className="status-warning">
                  ⚠ {((text.length / capacity.maxChars) * 100).toFixed(1)}% used - Approaching limit
                </span>
              )}
              {text.length > capacity.maxChars && (
                <span className="status-error">
                  ✗ Message is {(text.length - capacity.maxChars).toLocaleString()} characters too long!
                </span>
              )}
            </div>
          </div>
        )}

        <div className="form-group">
          <label>Secret Text:</label>
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your secret message here..."
            rows="6"
            disabled={loading}
          />
          <small>{text.length.toLocaleString()} characters</small>
        </div>

        <div className="form-group">
          <label>Password (Optional):</label>
          <input 
            type="password"
            id="hide-password"
            placeholder="Enter password to encrypt your message"
            disabled={loading}
            className="password-input"
          />
          <small>Leave empty for no encryption</small>
        </div>

        <button 
          type="submit" 
          disabled={loading || !image || !text || (capacity && text.length > capacity.maxChars)}
        >
          {loading ? 'Processing...' : 'Hide Text in Image'}
        </button>
        
        {capacity && text.length > capacity.maxChars && (
          <div className="button-warning">
            Cannot hide text: Message exceeds image capacity
          </div>
        )}
      </form>

      {message && <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>{message}</div>}
    </div>
  );
}

export default HideText;
