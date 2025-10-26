import { useState } from 'react';
import { extractMessage } from '../api'; // make sure api.js has this function

export default function ExtractMessage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleExtract = async (e) => {
    e.preventDefault();
    if (!file) return alert('Please select an image!');

    try {
      setStatus('Extracting...');
      const formData = new FormData();
      formData.append('image', file);

      const result = await extractMessage(formData); // api.js handles POST
      setMessage(result.message);
      setStatus('Extraction complete!');
    } catch (err) {
      console.error(err);
      setStatus('Failed to extract message');
    }
  };

  return (
    <div>
      <h2>Extract Message from Image</h2>
      <form onSubmit={handleExtract}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Extract</button>
      </form>
      {status && <p>{status}</p>}
      {message && (
        <div>
          <h3>Hidden Message:</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
