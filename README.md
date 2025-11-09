# Steganography Web App

Hide and extract secret messages in images using LSB (Least Significant Bit) steganography technique.

## Features

- **Hide Text**: Embed secret messages into images (PNG, JPG, JPEG, GIF)
- **Extract Text**: Retrieve hidden messages from images
- **Password Protection**: Encrypt messages with AES-256 encryption before hiding
- **Image Capacity Calculator**: Real-time calculation of how much text can be hidden
- **Smart Validation**: Prevents hiding text that exceeds image capacity
- **Visual Progress Bar**: See exactly how much of the image capacity you're using
- **Virus Scanner**: Validate images before processing
- **Multi-Format Support**: Works with PNG, JPG, JPEG, and GIF files
- No database required - files stored temporarily in uploads folder

## Security Features

- **AES-256 Encryption**: Industry-standard encryption algorithm
- **PBKDF2 Key Derivation**: 100,000 iterations for strong password-based encryption
- **Random Salt & IV**: Each encryption uses unique salt and initialization vector
- **Optional Protection**: Use password for sensitive data, or skip for convenience

## Important Notes

- **PNG is recommended** for best results (lossless format)
- **JPEG warning**: Uses lossy compression - hidden data may be lost if re-saved
- **GIF support**: Works but has limited color palette
- Output is always saved as PNG to preserve hidden data
- **Password**: If you use a password to hide text, you MUST use the same password to extract it

## Tech Stack

- **Frontend**: React, JavaScript
- **Backend**: Node.js, Express
- **Steganography**: LSB technique using pngjs

## Installation

1. Install all dependencies:
```bash
npm run install-all
```

2. Start the backend server (in one terminal):
```bash
cd server
npm start
```

3. Start the React frontend (in another terminal):
```bash
cd client
npm start
```

The app will open at `http://localhost:3000`

## Usage

1. **Hide Text**: 
   - Upload an image (PNG, JPG, JPEG, or GIF)
   - View the image capacity calculator showing maximum characters
   - Enter your secret message with real-time capacity feedback
   - Optionally enter a password for encryption
   - Download the modified image (always saved as PNG)

2. **Extract Text**: 
   - Upload an image with hidden text
   - Enter the password if the message was encrypted
   - View the extracted secret message

3. **Scan Image**: 
   - Upload any image to check if it's safe before processing
   - View validation results and file information

## How It Works

**Steganography (LSB Technique):**
The app uses LSB (Least Significant Bit) steganography to hide text in the RGB channels of images. The text is converted to binary and embedded in the least significant bits of pixel values, making it invisible to the human eye.

**Encryption (AES-256):**
When a password is provided:
1. Text is encrypted using AES-256-CBC algorithm
2. A random salt is generated for key derivation (PBKDF2 with 100,000 iterations)
3. A random IV (Initialization Vector) is generated for the cipher
4. The encrypted data (salt:iv:ciphertext) is then hidden in the image
5. To extract, the same password must be provided to decrypt the data

## Note

The virus scanner performs basic file validation. For production use, integrate with ClamAV or VirusTotal API for comprehensive scanning.
