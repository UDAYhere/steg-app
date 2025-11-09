const fs = require('fs');
const { PNG } = require('pngjs');
const Jimp = require('jimp');
const { encryptText, decryptText } = require('./encryption');

// Convert text to binary
function textToBinary(text) {
  return text.split('').map(char => 
    char.charCodeAt(0).toString(2).padStart(8, '0')
  ).join('');
}

// Convert binary to text
function binaryToText(binary) {
  const bytes = binary.match(/.{8}/g);
  if (!bytes) return '';
  return bytes.map(byte => String.fromCharCode(parseInt(byte, 2))).join('');
}

// Get file extension
function getFileExtension(filePath) {
  return filePath.split('.').pop().toLowerCase();
}

// Hide text using Jimp (supports multiple formats)
async function hideText(inputPath, outputPath, text, password = null) {
  try {
    // Encrypt text if password is provided
    let messageToHide = text;
    if (password) {
      console.log('Encrypting text with password...');
      messageToHide = encryptText(text, password);
      console.log('Text encrypted successfully');
    }
    
    const message = messageToHide + '###END###';
    const binaryMessage = textToBinary(message);
    
    console.log('Message to hide length:', text.length, 'characters');
    console.log('Binary message length:', binaryMessage.length, 'bits');
    
    const image = await Jimp.read(inputPath);
    const maxCapacity = image.bitmap.width * image.bitmap.height * 3;
    
    console.log('Image capacity:', maxCapacity, 'bits');
    console.log('Image dimensions:', image.bitmap.width, 'x', image.bitmap.height);
    
    if (binaryMessage.length > maxCapacity) {
      throw new Error(`Text is too long for this image. Max capacity: ${Math.floor(maxCapacity / 8)} characters, provided: ${text.length} characters`);
    }

    let messageIndex = 0;
    
    // Hide the message in the image
    for (let y = 0; y < image.bitmap.height && messageIndex < binaryMessage.length; y++) {
      for (let x = 0; x < image.bitmap.width && messageIndex < binaryMessage.length; x++) {
        const idx = (image.bitmap.width * y + x) << 2;
        
        // Modify LSB of R, G, B channels
        for (let i = 0; i < 3 && messageIndex < binaryMessage.length; i++) {
          const bit = parseInt(binaryMessage[messageIndex]);
          image.bitmap.data[idx + i] = (image.bitmap.data[idx + i] & 0xFE) | bit;
          messageIndex++;
        }
      }
    }

    console.log('Bits hidden:', messageIndex);

    // Always save as PNG to preserve data
    await image.writeAsync(outputPath);
    console.log('Image saved to:', outputPath);
    
    return { success: true };
  } catch (error) {
    console.error('Hide text error:', error);
    throw error;
  }
}

// Extract text using Jimp (supports multiple formats)
async function extractText(inputPath, password = null) {
  try {
    const image = await Jimp.read(inputPath);
    let binaryMessage = '';
    let found = false;
    
    // Extract bits from image
    for (let y = 0; y < image.bitmap.height && !found; y++) {
      for (let x = 0; x < image.bitmap.width && !found; x++) {
        const idx = (image.bitmap.width * y + x) << 2;
        
        // Extract LSB from R, G, B channels
        for (let i = 0; i < 3; i++) {
          binaryMessage += (image.bitmap.data[idx + i] & 1).toString();
        }
        
        // Check for end delimiter every 72 bits (9 characters)
        if (binaryMessage.length % 72 === 0 && binaryMessage.length >= 72) {
          const text = binaryToText(binaryMessage);
          if (text.includes('###END###')) {
            found = true;
            break;
          }
        }
      }
    }
    
    const text = binaryToText(binaryMessage);
    let extractedText = '';
    
    if (text.includes('###END###')) {
      extractedText = text.split('###END###')[0];
    } else {
      // If no delimiter found, return empty or cleaned text
      extractedText = text.replace(/\0/g, '').replace(/[^\x20-\x7E]/g, '').trim();
    }
    
    // Decrypt if password is provided
    if (password && extractedText) {
      console.log('Attempting to decrypt with password...');
      try {
        extractedText = decryptText(extractedText, password);
        console.log('Text decrypted successfully');
      } catch (decryptError) {
        throw new Error('Wrong password or data is not encrypted');
      }
    }
    
    return extractedText || '';
  } catch (error) {
    console.error('Extract error:', error);
    throw error;
  }
}

module.exports = { hideText, extractText };
