const express = require('express');
const router = express.Router();
const locationController = require('../controller/location');
router.get('/',locationController.getLocation);
router.post('/post',locationController.postLocation);
router.put('/:locationId',locationController.updateLocation);
router.delete('/:locationId',locationController.deleteLocation);

module.exports = router