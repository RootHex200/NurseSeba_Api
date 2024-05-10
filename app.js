

const express = require("express");

const app = express();
const server = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors = require("cors");
const morgan = require("morgan");
const { nursesebarouter } = require("./route/nurseseba.router");
const rateLimit = require('express-rate-limit')




const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});



app.use(limiter)
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));





app.use('/static', express.static(__dirname + '/upload/images'));
//nurseseba oparation
app.use("/api/v1/nurseseba", nursesebarouter);
//route handaling 

app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found 404"
    })
});

//intenal server error
app.use((error, req, res, next) => {
    res.status(500).json({
        message: error
    })
})



module.exports = { server }
