const mongoose = require('mongoose');


let postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    promo: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    disc: {
        type: Number,
        required: true
    },
});

let Post = module.exports = mongoose.model('Post', postSchema);