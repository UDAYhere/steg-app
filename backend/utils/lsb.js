const Jimp = require("jimp");

// Convert message to binary
function messageToBinary(message) {
  return message
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join("");
}

// Convert binary to text
function binaryToMessage(binary) {
  let chars = [];
  for (let i = 0; i < binary.length; i += 8) {
    chars.push(String.fromCharCode(parseInt(binary.slice(i, i + 8), 2)));
  }
  return chars.join("");
}

// Encode message into image
async function encodeImage(inputPath, outputPath, message) {
  const image = await Jimp.read(inputPath);
  const binaryMessage = messageToBinary(message + "§"); // add delimiter
  const totalPixels = image.bitmap.width * image.bitmap.height;

  if (binaryMessage.length > totalPixels * 3) {
    throw new Error("Message too long for this image!");
  }

  let msgIndex = 0;

  for (let y = 0; y < image.bitmap.height && msgIndex < binaryMessage.length; y++) {
    for (let x = 0; x < image.bitmap.width && msgIndex < binaryMessage.length; x++) {
      const color = Jimp.intToRGBA(image.getPixelColor(x, y));
      let { r, g, b } = color;

      if (msgIndex < binaryMessage.length) {
        r = (r & 0xfe) | parseInt(binaryMessage[msgIndex++]); // red
      }
      if (msgIndex < binaryMessage.length) {
        g = (g & 0xfe) | parseInt(binaryMessage[msgIndex++]); // green
      }
      if (msgIndex < binaryMessage.length) {
        b = (b & 0xfe) | parseInt(binaryMessage[msgIndex++]); // blue
      }

      const newColor = Jimp.rgbaToInt(r, g, b, color.a);
      image.setPixelColor(newColor, x, y);
    }
  }

  await image.writeAsync(outputPath);
  return outputPath;
}

// Decode message from image
async function decodeImage(inputPath) {
  const image = await Jimp.read(inputPath);
  let binaryMessage = "";

  for (let y = 0; y < image.bitmap.height; y++) {
    for (let x = 0; x < image.bitmap.width; x++) {
      const { r, g, b } = Jimp.intToRGBA(image.getPixelColor(x, y));
      binaryMessage += (r & 1).toString();
      binaryMessage += (g & 1).toString();
      binaryMessage += (b & 1).toString();
    }
  }

  const message = binaryToMessage(binaryMessage);
  return message.split("§")[0]; // split at delimiter
}

module.exports = { encodeImage, decodeImage };
