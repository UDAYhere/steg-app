// routes/stego.js
const express = require('express');
const multer = require('multer');
const { encodeImage, decodeImage } = require('../utils/lsb');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/hide', upload.single('image'), async (req, res) => {
  try {
    const outputPath = `uploads/hidden_${req.file.originalname}`;
    await encodeImage(req.file.path, outputPath, req.body.message);
    res.json({ path: outputPath, message: 'Message hidden successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to hide message' });
  }
});

router.post('/extract', upload.single('image'), async (req, res) => {
  try {
    const message = await decodeImage(req.file.path);
    res.json({ message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to extract message' });
  }
});

module.exports = router;
