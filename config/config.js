

require("dotenv").config();


const dev={
    app:{
        PORT:process.env.PORT || 3000
    },
    db:{
        db_url:process.env.DB_URL
    }
}


module.exports={dev};