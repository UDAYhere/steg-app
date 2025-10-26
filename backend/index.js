const express = require('express');
const cors = require('cors');
const path = require('path');
const stegoRoutes = require('./routes/stego');


const app = express();
app.use(cors());
app.use(express.json());


// serve uploaded/generated images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api/stego', stegoRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Stego backend running on port ${PORT}`));