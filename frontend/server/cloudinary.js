// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: 'dynphim6l', 
  api_key: '953317263686264', 
  api_secret: 'Oz0SRVFffcC-LE7A0nIObsU4BVk' 
});

module.exports = cloudinary;
