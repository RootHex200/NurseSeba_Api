


const joi=require("joi");



const AddBloodRequest=joi.object().keys({
    profileImage:joi.string().optional(),
    name:joi.string().required(),
    mobileNumber:joi.string().required(),
    password:joi.string().required(),
    email:joi.string().optional(),
    designation:joi.string().optional(),
    dateofBirth:joi.string().required(),
    bloodGroup:joi.string().optional(),
    lastbloodDonateDate:joi.string().required(),
    Division:joi.string().required(),
    District:joi.string().required(),
    Upazilla:joi.string().required(),
    Area:joi.string().required()
})

const AddNurseRequest=joi.object().keys({
    profileImage:joi.string().optional(),
    name:joi.string().required(),
    mobileNumber:joi.string().required(),
    password:joi.string().required(),
    email:joi.string().optional(),
    gender:joi.string().optional(),
    dateofBirth:joi.string().required(),
    registrationType:joi.string().required(),
    Division:joi.string().required(),
    District:joi.string().required(),
    Upazilla:joi.string().required(),
    Area:joi.string().required()
})


const AddequipmentRequest=joi.object().keys({
    equipmentName:joi.string().required(),
    price:joi.string().required(),
    phone:joi.string().required()
})

const AddhealthtipsRequest=joi.object().keys({
    title:joi.string().required(),
    description:joi.string().required()
})

const SearchDonorRequest=joi.object().keys({
    Division:joi.string().required(),
    District:joi.string().required(),
    Upazilla:joi.string().required(),
    Area:joi.string().required(),
    bloodGroup:joi.string().required(),
})

const SearchNurseRequest=joi.object().keys({
    Division:joi.string().required(),
    District:joi.string().required(),
    Upazilla:joi.string().required(),
    Area:joi.string().required(),
})


const AddBloodValidate=(data)=>{
    const validationresult= AddBloodRequest.validate(data);
    return validationresult;
}

const AddNurseValidate=(data)=>{
    const validationresult=AddNurseRequest.validate(data);
    return validationresult;
}
const AddequipmentValidate=(data)=>{
    const validationresult=AddequipmentRequest.validate(data);
    return validationresult;
}

const AddhealthtipsValidate=(data)=>{
    const validationresult=AddhealthtipsRequest.validate(data);
    return validationresult;
}

const SearchDonorValidate=(data)=>{
    const validationresult=SearchDonorRequest.validate(data);
    return validationresult;
}

const SearchNurseValidate=(data)=>{
    const validationresult=SearchNurseRequest.validate(data);
    return validationresult;
}
module.exports={AddBloodValidate,AddNurseValidate,AddequipmentValidate,AddhealthtipsValidate,SearchDonorValidate,SearchNurseValidate};