
const { AddBloodValidate, SearchDonorValidate } = require("../config/request");
const { bloodschema } = require("../model/bloodDonorschema");

const {redisClient}=require("../config/db")
const addBlooddonor=async(req,res)=>{
    const imagfile=`http://localhost:4000/static/${req.file.filename}`;
    const document={
        profileImage:imagfile,
        name:req.body.name,
        mobileNumber:req.body.mobileNumber,
        password:req.body.password,
        email:req.body.email,
        designation:req.body.designation,
        dateofBirth:req.body.dateofBirth,
        bloodGroup:req.body.bloodGroup,
        lastbloodDonateDate:req.body.lastbloodDonateDate,
        Division:req.body.Division,
        District:req.body.District,
        Upazilla:req.body.Upazilla,
        Area:req.body.Area,
    }

    const validate=AddBloodValidate(document);
    if(!validate.error){
        try{
            const data=bloodschema(document)
            const result=await data.save();
            res.status(201).json(result);
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
const getDonors=async(req,res)=>{
    try{
        const result=await bloodschema.find();
        res.status(200).json({
            status:200,
            donorsData:result
        })
    }catch (e){
        const error=e.message;
        res.status(400).json({
            message:error
        });
    }
}



const searchDonor=async(req,res)=>{
    const document={
        Division:req.body.Division,
        District:req.body.District,
        Upazilla:req.body.Upazilla,
        Area:req.body.Area,
        bloodGroup:req.body.bloodGroup,
    }

    const validate=SearchDonorValidate(document);
    if(!validate.error){

        //cashing.......
        const Rediskey=`${req.body.Division}-${req.body.District}-${req.body.Upazilla}-${req.body.Area}-${req.body.bloodGroup}`;
        
        await redisClient.get(Rediskey)
        .then(async(checkCash)=>{
            if(checkCash==null){
                try{
                    const docs = await bloodschema.aggregate([
                        { $match: document }
                      ]);
                    res.status(200).json({
                        status:200,
                        data:docs
                    });
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
            });
        })

    }
    if(validate.error){
        res.status(400).json({message:validate.error});
    }

}

//aggregration

const agg=async(req,res)=>{
    const filter = { name: "nazmul" };
    const docs = await bloodschema.aggregate([
        { $match: filter }
      ]);
    
    res.json(docs)
}


module.exports={addBlooddonor,getDonors,searchDonor,agg}