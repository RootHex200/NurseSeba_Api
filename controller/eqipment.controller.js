const { AddequipmentValidate } = require("../config/request");
const { equiment } = require("../model/eqipment")



const addEquipment=async(req,res)=>{
    const document={
        equipmentName:req.body.equipmentName,
        price:req.body.price,
        phone:req.body.phone
    }
    const validate=AddequipmentValidate(document);
    if(!validate.error){
        try{
            const documnt=equiment(document);
            await documnt.save();
            res.status(200).json({
                status:200,
                messasge:"data is saveed"
            })
        }catch (e){
            const error=e.message;
            res.status(400).json({
                message:error
            });
        }
    }
    if(validate.error){
        res.status(400).json({message:validate.error});
    }

}

const getEquipment=async(req,res)=>{
    try{
        const result=await equiment.find();
        res.status(200).json({
            status:200,
            equiment:result
        })
    }catch (e){
        const error=e.message;
        res.status(400).json({
            message:error
        });
    }
}

module.exports={addEquipment,getEquipment}