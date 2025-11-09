const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const steganographyRoutes = require('./routes/steganography');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Routes
app.use('/api/steganography', steganographyRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Steganography API Server' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
