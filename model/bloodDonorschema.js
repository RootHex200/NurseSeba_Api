


const mongose=require("mongoose");


const bloodDonorschema=mongose.Schema({
    profileImage:{
        type:"String",
    },
    name:{
        type:"String",
        required:true
        
    },
    mobileNumber:{
        type:"String",
        required:true
        
    },
    password:{
        type:"String",
        required:true
        
    },
    email:{
        type:"String"
    },
    designation:{
        type:"String"
    },
    dateofBirth:{
        type:"String",
        required:true
        
    },
    bloodGroup:{
        type:"String"
    },
    lastbloodDonateDate:{
        type:"String",
        required:true
    },
    Division:{
        type:"String",
        required:true
        
    },
    District:{
        type:"String",
        required:true
        
    },
    Upazilla:{
        type:"String",
        required:true
        
    },
    Area:{
        type:"String",
        required:true
        
    },
});


module.exports={bloodschema:mongose.model("blooddonors",bloodDonorschema)};