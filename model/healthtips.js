



const mongoose=require("mongoose");

const Healthschema=mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});
module.exports={healtSchema:mongoose.model("healthtips",Healthschema)}