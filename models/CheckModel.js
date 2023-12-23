mongoose = require('mongoose')
const checkSchema = mongoose.Schema(
    {
        UserName:{
            type:String

        },
        Email:{
            type:String,
            required:[true,"please enter a product name"]

        },
        Password:
        {
            type :String,
            required:[true,"half or full"]
        },
       
    }
,
{
    timestamps:true
}

)
const check=mongoose.model('check',checkSchema);
module.exports=check;

