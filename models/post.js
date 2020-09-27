const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema(
    {
    type: {
        type: String,
    },
    properties: {
        id: Number,
        name: String,
        description: String,
        icon: String,
        qty_search: Number,
        iconSize: Number,
    },
    geometry: {
        coordinates: Array,
        type: String,
    },
    },
    { timestamps: true }
);
module.exports = mongoose.model("Location",locationSchema);