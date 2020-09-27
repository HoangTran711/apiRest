const express = require('express');
const router = express.Router();
const locationController = require('../controller/location');
router.get('/',locationController.getLocation);
router.post('/post',locationController.postLocation);
router.put('/:locationId',locationController.updateLocation);
router.delete('/:locationId',locationController.deleteLocation);
router.get('/:locationId',locationController.getOne);
router.post('/updateQuantity/',locationController.updateQuantity);

module.exports = router