const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name:{
                type: String,
                required:[true,"Please enter a product name"]

        },
        quantity:{
            type:Number,
            required:true,
            default:

        },
        price:{
            type:Number,
            required:true,
        }
        
    },
    {
        timeStamps:true
    }
)
const product= mongoose.nodel('product',productSchema);

module.exports=product;