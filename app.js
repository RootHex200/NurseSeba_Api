


const express=require("express");

const app=express();

const cors=require("cors");
const morgan=require("morgan");
const { nursesebarouter } = require("./route/nurseseba.router");
const { agg } = require("./controller/donor.controller");


app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use('/static', express.static(__dirname+'/upload/images'));
//nurseseba oparation
app.use("/api/v1/nurseseba",nursesebarouter);

app.get("/",agg);
//route handaling 

app.use((req,res,next)=>{
    res.status(404).json({
        message:"Route not found 404"
    })
});

//intenal server error
app.use((error,req,res,next)=>{
    res.status(500).json({
        message:error
    })
})




module.exports={app}
