const { addBlooddonor, getDonors, searchDonor } = require("../controller/donor.controller");
const { addEquipment, getEquipment } = require("../controller/eqipment.controller");
const { getApiData } = require("../controller/getalldata");
const { addHealthTips, getHealthTips } = require("../controller/healthtips.controller");
const { addnurse, getNurses, searchNurse } = require("../controller/nurse.controller");
const { upload } = require("../middleware/upload_image");



const nursesebarouter=require("express").Router();



nursesebarouter.post("/adddonor",upload.single("profile"),addBlooddonor);

nursesebarouter.post("/addnurse",upload.single("profile"),addnurse);

nursesebarouter.get("/getnurse",getNurses);

nursesebarouter.get("/getdonor",getDonors);

nursesebarouter.post("/searchdonor",searchDonor);

nursesebarouter.post("/searchnurse",searchNurse);

nursesebarouter.get("/",getApiData);

nursesebarouter.post("/addtips",addHealthTips);

nursesebarouter.get("/gettips",getHealthTips);

nursesebarouter.post("/addequipment",addEquipment);

nursesebarouter.get("/getequipment",getEquipment);

//


module.exports={nursesebarouter}