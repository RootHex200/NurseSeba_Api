const { AddhealthtipsValidate } = require("../config/request");
const { healtSchema } = require("../model/healthtips")



const addHealthTips=async(req,res)=>{
    const document={
        title:req.body.title,
        description:req.body.description
    }
    const validate=AddhealthtipsValidate(document);
    if(!validate.error){
        try{
            const data=healtSchema(document);
    
            const result=await data.save();
            res.status(200).json({
                message:result
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

const getHealthTips=async(req,res)=>{
    try{
        const result=await healtSchema.find();
        res.status(200).json({
            status:200,
            healthTips:result
        })
    }catch (e){
        const error=e.message;
        res.status(400).json({
            message:error
        });
    }
}

module.exports={addHealthTips,getHealthTips}