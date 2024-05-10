
const { bloodschema } = require("../model/bloodDonorschema");
const { equiment } = require("../model/eqipment");
const { healtSchema } = require("../model/healthtips");
const { schemanurse } = require("../model/nurseschema");






const getApiData = async (req, res) => {

    try {
            
        const nursedata = await bloodschema.find();

        const donordata = await schemanurse.find();

        const healthtips = await healtSchema.find();
        const eqipment = await equiment.find();


        const data = {
            nurses: nursedata,
            donor: donordata,
            healthtips: healthtips,
            equiment: eqipment
        }

        res.status(200).json({
            status:200,
            data:{
                nurses:nursedata,
                donor:donordata,
                healthtips:healthtips,
                equiment:eqipment
            }
        })



    } catch (e) {
        const error = e.message;
        res.status(400).json({
            message: error
        });
    }
}


module.exports = { getApiData };