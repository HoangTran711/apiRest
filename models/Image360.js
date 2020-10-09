const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    levels: {
        type: Array,
    },
    faceSize: {
        type: Number,
    },
    initialViewParameters: {
        type: Object,
    },
    linkHotspots: {
        type: Array,
    },

    infoHotspots: {
        type: Array,
    },
}, {
    timestamps: true
});
module.exports = mongoose.model('Image360', imageSchema);