const { AddNurseValidate, SearchNurseValidate } = require("../config/request");
const {schemanurse }= require("../model/nurseschema");
const {redisClient}=require("../config/db")

const addnurse=async(req,res)=>{
    const imagfile=`http://localhost:4000/static/${req.file.filename}`;
    const document={
        profileImage:imagfile,
        name:req.body.name,
        mobileNumber:req.body.mobileNumber,
        password:req.body.password,
        email:req.body.email,
        gender:req.body.gender,
        dateofBirth:req.body.dateofBirth,
        registrationType:req.body.registrationType,
        Division:req.body.Division,
        District:req.body.District,
        Upazilla:req.body.Upazilla,
        Area:req.body.Area,
    }
    
    const validate=AddNurseValidate(document);
    if(!validate.error){
        try{
            const data=schemanurse(document)
        
            const result=await data.save();
            res.status(201).json({message:result});
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

const getNurses=async(req,res)=>{
    try{
        const result=await schemanurse.find();
        res.status(200).json({
            status:200,
            nurseData:result
        })
    }catch (e){
        const error=e.message;
        res.status(400).json({
            message:error
        });
    }
}

const searchNurse=async(req,res)=>{
    const document={
        Division:req.body.Division,
        District:req.body.District,
        Upazilla:req.body.Upazilla,
        Area:req.body.Area,
    }
    const validate=SearchNurseValidate(document);
    if(!validate.error){
        //cashing...

        const Rediskey=`${req.body.Division}-${req.body.District}-${req.body.Upazilla}-${req.body.Area}`;
        
        await redisClient.get(Rediskey)
        .then(async(checkCash)=>{
            if(checkCash==null){
                try{
                    const docs = await schemanurse.aggregate([
                        { $match: document }
                      ]);
                    res.status(200).json({
                        status:200,
                        data:docs
                    })
                    await redisClient.set(Rediskey,JSON.stringify(docs),{
                        EX: 3600,
                    })
                }catch (e){
                    const error=e.message;
                    res.status(400).json({
                        message:error
                    });
                }
                
            }
            if(checkCash!=null){
                res.status(200).json(JSON.parse(checkCash))
            }
        })
        .catch((e)=>{
            res.status(400).json({
                message:e
            })
        })

    }
    if(validate.error){
        res.status(400).json({message:validate.error});
    }
}





module.exports={addnurse,getNurses,searchNurse};