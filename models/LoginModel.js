mongoose = require('mongoose')
const loginSchema = mongoose.Schema(
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
const login=mongoose.model('login',loginSchema);
module.exports=login;

