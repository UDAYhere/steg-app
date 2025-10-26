import { useState } from 'react';
import { hideMessage } from '../api';


export default function HideMessage(){
const [file, setFile] = useState(null);
const [message, setMessage] = useState('');
const [resultUrl, setResultUrl] = useState('');
const [status, setStatus] = useState('');


const handleSubmit = async (e) => {
e.preventDefault();
if(!file) return alert('Select image');
try{
setStatus('Hiding message...');
const res = await hideMessage(file, message);
setResultUrl('http://localhost:5000' + res.data.url);
setStatus('Done');
}catch(err){
console.error(err);
setStatus('Error: ' + (err.response?.data?.error || err.message));
}
}


return (
<div>
<h2>Hide Message inside Image</h2>
<form onSubmit={handleSubmit} className="card">
<input type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])} />
<textarea placeholder="Secret message" value={message} onChange={e=>setMessage(e.target.value)} />
<button type="submit">Hide Message</button>
</form>


<p>{status}</p>
{resultUrl && (
<div className="result">
<h3>Stego Image</h3>
<a href={resultUrl} target="_blank" rel="noreferrer">Open image</a>
<br />
<a href={resultUrl} download>Download</a>
</div>
)}
</div>
)
}