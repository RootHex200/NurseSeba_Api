


const mongoose=require("mongoose")


const Equipmentschema=mongoose.Schema({
    equipmentName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

module.exports={equiment:mongoose.model("equipments",Equipmentschema)}