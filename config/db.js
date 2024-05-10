
const mongoose = require("mongoose");
const { dev } = require("./config");
const Redis = require("redis");
const redisClient = Redis.createClient();
const dburl = dev.db.db_url;

mongoose.set("strictQuery", false);

mongoose.connect(dburl).then(async(value)=>{
    redisClient.on('error', (err) => console.log('Redis Client Error', err));
    await redisClient.connect();
    console.log("all database is conntected")
}).catch((e)=> {
    console.log(e)
    console.log("database not connected")
})



module.exports={redisClient}


