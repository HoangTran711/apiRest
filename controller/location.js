const Post = require('../models/post');
exports.getLocation = (req,res,next) => {
    Post.find()
    .then(result => res.status(200).json({
        message:"Get location successfully",
        location:result
    }))
}
exports.postLocation = (req,res,next) => {
    const {type} = req.body;
    const {id} = req.body;
    const {properties} = req.body;
    const {geometry }= req.body;
    // if(!req.file) {
    //     const error = new Error("No images provided");
    //     error.statusCode = 422;
    //     throw error;
    // }
    // const imageUrl = req.file.path;
    const post = new Post({
        type:type,
        id:id,
        properties:properties,
        geometry:geometry,
        // imageUrl:imageUrl
    })
    post
    .save()
    .then(result => {
        console.log(result);
        return res.status(201).json({
            message:"Create successfully!",
            post: result
        })
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })
}
exports.updateLocation = (req,res,next) => {
    const locationId = req.params.locationId;
    const {type} = req.body;
    const {id} = req.body;
    const {properties} = req.body;
    const {geometry }= req.body;
    // if(req.file) {
    //     imageUrl = req.file.path;
    // }
    // if(!imageUrl) {
    //     const error = new Error("No file provided");
    //     error.statusCode = 422;
    //     throw error;
    // }
    Post.findById(locationId)
    .then(post => {
        if(!post) {
            const error = new Error("Not fount post");
            error.statusCode = 404;
            throw error
        }
        // if(imageUrl !== post.imageUrl) {
        //     clearImage(post.imageUrl);
        // }
        post.type = type;
        
        post.id = id;
        post.properties = properties;
        post.geometry= geometry;
        
        return post.save();
    })
    .then(result => {
        return res.status(200).json({
            message:"Successfully",
            post: result
        })
    })
    .catch(err =>{
        console.log(err);
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
}
exports.deleteLocation = (req,res,next) => {
    const locationId = req.params.locationId;
    Post.deleteOne({_id:locationId})
    .then(result => {
        return res.status(200).json({
            message:'Successfully',
            posts:result
        })
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
}