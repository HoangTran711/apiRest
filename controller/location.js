const Post = require('../models/post');
exports.getLocation = (req,res,next) => {
    Post.find()
    .then(result => res.status(200).json({
        message:"Get location successfully",
        features:result
    }))
}
exports.postLocation = (req,res,next) => {
    const {type} = req.body;
    const {id} = req.body;
    const {properties} = req.body;
    const {geometry }= req.body;
    const {qty_search} = req.body;
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
        qty_search:qty_search
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
    const {qty_search} = req.body;
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
            const error = new Error("Not found post");
            error.statusCode = 404;
            throw error
        }
        // if(imageUrl !== post.imageUrl) {
        //     clearImage(post.imageUrl);
        // }
        post.type = type;
        post.qty_search = qty_search;
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
exports.updateQuantity = async (req, res, next) => {
    let temp = [];
    const { arr } = req.body;
    try {
        if (!arr) throw new Error("arr is undefined");
        for (let i = 0; i < arr.length; i++) {
            let conditions = { "properties.id": Number(arr[i].id) },
                update = { $inc: { "properties.qty_search": arr[i].qty_search / 2 } };

            await Post.updateOne(conditions, update, (err, numAffected) => {
                if (err) {
                    const error = new Error("Not found post");
                    error.statusCode = 404;
                    throw error;
                }
                // numAffected is the number of updated documents
                temp.push(numAffected);
            }).catch((err) => {
                if(!err.statusCode) err.statusCode = 500;
                next(err);
            });
        }
        return res.status(200).json({
            message: "Successfully",
            result: temp,
        });
    } catch (error) {
        if(!error.statusCode) { 
            error.statusCode = 500;
        }
        next(error);
    }
};
exports.getOne = (req,res,next) => {
    const locationId = req.params.locationId;
    Post.findById(locationId)
    .then(result => {
        return res.status(200).json({
            message:"Fetch post successfully!",
            post:result
        })
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
}