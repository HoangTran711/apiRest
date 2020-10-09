const express = require('express');
const router = express.Router();
const ImageController = require('../controller/Image360');

router.get("/", ImageController.getImages);
router.post("/post", ImageController.postImage);

module.exports = router;