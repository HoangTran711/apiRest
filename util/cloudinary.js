require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'mapimage',
  api_key: '677343416814958',
  api_secret: 'iMckkluYXpg7YdukJbG6e-IVuco',
});
exports.cloudinary = cloudinary;
