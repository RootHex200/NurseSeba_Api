




const mongose=require("mongoose");


const nurseschema=mongose.Schema({
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
    gender:{
        type:"String"
    },
    dateofBirth:{
        type:"String",
        required:true
        
    },
    registrationType:{
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


module.exports={schemanurse:mongose.model("nurses",nurseschema)};