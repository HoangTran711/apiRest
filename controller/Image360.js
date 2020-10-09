const Image = require('../models/Image360');
exports.getImages = (req, res, next) => {
    Image.find()
        .then(result => res.status(200).json({
            message: "Get Image successfully",
            scenes: result
        }))
}
exports.postImage = (req, res, next) => {
    const {
        name
    } = req.body;
    const {
        id
    } = req.body;
    const {
        levels
    } = req.body;
    const {
        faceSize
    } = req.body;
    const {
        initialViewParameters
    } = req.body;
    const {
        linkHotspots
    } = req.body;
    const {
        infoHotspots
    } = req.body;
    const image = new Image({
        id: id,
        name: name,
        levels: levels,
        faceSize: faceSize,
        initialViewParameters: initialViewParameters,
        linkHotspots: linkHotspots,
        infoHotspots: infoHotspots
    })
    image.save()
        .then(result => {
            return res.status(200).json({
                message: "Successfully",
                result: result
            })
        })
        .catch(err => {
            if (!err.statusCode) err.statusCode = 500;
            next(err);
        })
}