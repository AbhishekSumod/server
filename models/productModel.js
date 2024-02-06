const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        CategoryName:{
            type: String
        },
        name:{
            type: String,
            required: [true, "please enter a product name"]
        },
        quantity: {
            type: String,
            required: [true, "half or full"]
        },
        price: {
            type: Number,
            required: true
        },
        descrption: {
            type: String
        },
        star: {
            type: String
        },
        Image: {
            type: String,
            required: [false, "enter image"]
        }
    },
    {
        timestamps: true
    }
);

const product = mongoose.model('product', productSchema);
module.exports = product;
