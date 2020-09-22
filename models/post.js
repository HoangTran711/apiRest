const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    type:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true
    },
    properties:{
        type:Object,
        required:true
    },
    geometry:{
        type:Object,
        required:true
    }
},{timestamps:true});
module.exports = mongoose.model("Location",locationSchema);