mongoose = require('mongoose')
const registerSchema = mongoose.Schema(
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
const register=mongoose.model('register',registerSchema);
module.exports=register;

