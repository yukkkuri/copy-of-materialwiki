const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    tags: {
        type: Array,
        required: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    tel: {
        type: String,
        required: true,
        trim: true
    },
    website: {
        type: String,
        required: true,
        trim: true
    },
    project: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    product: {
        type: String,
        required: true,
        trim: true
    },
    designer: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true,
        trim: true
    }
}, {
        timestamps: true,
    }
)

const image = mongoose.model("image",imageSchema);

module.exports= image;