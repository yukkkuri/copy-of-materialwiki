const mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = image => {

};

const imageSchema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        // required: true,
        trim: true
        //minlength: 3s
    },
    tags: {
        // type: Array,
        type: Array,
        // required: true,
        trim: true
    },
    company: {
        type: String,
        // required: true,
        trim: true
    },
    tel: {
        type: String,
        // required: true,
        trim: true
    },
    website: {
        type: String,
        // required: true,
        trim: true
    },
    project: {
        type: String,
        // required: true,
        trim: true
    },
    location: {
        type: String,
        // required: true,
        trim: true
    },
    product: {
        type: String,
        // required: true,
        trim: true
    },
    designer: {
        type: String,
        // required: true,
        trim: true
    },
    year: {
        type: String,
        // required: true,
        trim: true
    }
}, {
        timestamps: true,
    }
)

const image = mongoose.model("image", imageSchema);

module.exports = image;