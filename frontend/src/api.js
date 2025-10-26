import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api/stego' });


export const uploadImage = (file) => {
const fd = new FormData();
fd.append('image', file);
return API.post('/upload', fd);
};


export const hideMessage = (file, message) => {
  const fd = new FormData();
  fd.append('image', file);        // must match multer field name
  fd.append('message', message);   // must match req.body.message
  return API.post('/hide', fd);
};

export const extractMessage = (file) => {
  const fd = new FormData();
  fd.append('image', file);        // must match multer field name
  return API.post('/extract', fd);
};