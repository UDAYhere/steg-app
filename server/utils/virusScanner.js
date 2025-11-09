const fs = require('fs');

// File signatures for validation
const FILE_SIGNATURES = {
  png: { signature: Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]), length: 8 },
  jpg: { signature: Buffer.from([0xFF, 0xD8, 0xFF]), length: 3 },
  jpeg: { signature: Buffer.from([0xFF, 0xD8, 0xFF]), length: 3 },
  gif: { signature: Buffer.from([0x47, 0x49, 0x46, 0x38]), length: 4 }
};

// Get file extension
function getFileExtension(filePath) {
  return filePath.split('.').pop().toLowerCase();
}

// Simple file validation scanner
// Note: For production, integrate with ClamAV or VirusTotal API
async function scanFile(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const extension = getFileExtension(filePath);
    
    // Basic checks
    const checks = {
      fileExists: true,
      fileSize: stats.size,
      fileSizeOk: stats.size > 0 && stats.size < 10 * 1024 * 1024, // Max 10MB
      fileType: extension,
      isValidImageType: ['png', 'jpg', 'jpeg', 'gif'].includes(extension),
      timestamp: new Date().toISOString()
    };

    // Read file header to verify signature
    let validSignature = false;
    if (FILE_SIGNATURES[extension]) {
      const sigInfo = FILE_SIGNATURES[extension];
      const buffer = Buffer.alloc(sigInfo.length);
      const fd = fs.openSync(filePath, 'r');
      fs.readSync(fd, buffer, 0, sigInfo.length, 0);
      fs.closeSync(fd);
      
      validSignature = buffer.equals(sigInfo.signature);
    }
    
    checks.validSignature = validSignature;

    // Warning for JPEG (lossy compression)
    if (extension === 'jpg' || extension === 'jpeg') {
      checks.warning = 'JPEG uses lossy compression. Hidden data may be lost if image is re-saved.';
    }

    const isSafe = checks.fileSizeOk && checks.isValidImageType && checks.validSignature;

    return {
      safe: isSafe,
      message: isSafe ? 'File appears safe to proceed' : 'File validation failed',
      checks: checks
    };
  } catch (error) {
    return {
      safe: false,
      message: 'Error scanning file',
      error: error.message
    };
  }
}

module.exports = { scanFile };
