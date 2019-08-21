const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    // id:{
    //     type: String,
    //     required: true,
    //     trim: true,
    //     unique:true
    // },
    name: {
        type: String,
        required: true,
        trim: true
        //minlength: 3s
    },
    tags: {
        // type: Array,
        type: Array,        
        required: true,
        trim: true
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