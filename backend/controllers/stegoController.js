const path = require('path');
const { encodeImage, decodeImage } = require('../utils/lsb');


async function uploadImage(req, res) {
// simple upload (returns path)
if (!req.file) return res.status(400).json({ error: 'No file' });
const url = `/uploads/${req.file.filename}`;
res.json({ url, filename: req.file.filename });
}


async function hideMessage(req, res) {
try {
const { message } = req.body;
if (!req.file) return res.status(400).json({ error: 'Image required' });
if (!message) return res.status(400).json({ error: 'Message required' });


const inputPath = req.file.path;
const outName = `stego-${Date.now()}-${req.file.filename}`;
const outputPath = path.join(path.dirname(inputPath), outName);


await encodeImage(inputPath, outputPath, message);
const url = `/uploads/${path.basename(outputPath)}`;
res.json({ url, filename: path.basename(outputPath) });
} catch (err) {
console.error(err);
res.status(500).json({ error: err.message });
}
}


async function extractMessage(req, res) {
try {
if (!req.file) return res.status(400).json({ error: 'Image required' });
const inputPath = req.file.path;
const message = await decodeImage(inputPath);
res.json({ message });
} catch (err) {
console.error(err);
res.status(500).json({ error: err.message });
}
}


module.exports = { uploadImage, hideMessage, extractMessage };