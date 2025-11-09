const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { hideText, extractText } = require('../utils/lsb');
const { scanFile } = require('../utils/virusScanner');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PNG, JPG, JPEG, and GIF files are allowed'));
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Scan image for viruses
router.post('/scan', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = req.file.path;
    const scanResult = await scanFile(filePath);

    // Clean up the file after scanning
    fs.unlinkSync(filePath);

    res.json(scanResult);
  } catch (error) {
    console.error('Scan error:', error);
    res.status(500).json({ error: 'Error scanning file', details: error.message });
  }
});

// Hide text in image
router.post('/hide', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { text, password } = req.body;
    if (!text) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ error: 'No text provided' });
    }

    const inputPath = req.file.path;
    const outputPath = path.join('uploads', 'hidden-' + Date.now() + '.png');

    console.log('Hiding text in:', inputPath);
    console.log('Text length:', text.length);
    console.log('Password protected:', !!password);
    
    await hideText(inputPath, outputPath, text, password || null);
    console.log('Text hidden successfully, output:', outputPath);

    // Send the file
    res.download(outputPath, 'hidden-message.png', (err) => {
      // Clean up files after download
      if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
      if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
      
      if (err) {
        console.error('Download error:', err);
      }
    });
  } catch (error) {
    console.error('Hide error:', error);
    
    // Clean up files on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({ error: 'Error hiding text', details: error.message });
  }
});

// Extract text from image
router.post('/extract', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { password } = req.body;
    const filePath = req.file.path;
    
    console.log('Extracting from:', filePath);
    console.log('Password provided:', !!password);
    
    const extractedText = await extractText(filePath, password || null);
    console.log('Extracted text length:', extractedText ? extractedText.length : 0);

    // Clean up the file
    fs.unlinkSync(filePath);

    res.json({ 
      text: extractedText,
      success: extractedText && extractedText.length > 0
    });
  } catch (error) {
    console.error('Extract error:', error);
    
    // Clean up file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({ error: 'Error extracting text', details: error.message });
  }
});

module.exports = router;
