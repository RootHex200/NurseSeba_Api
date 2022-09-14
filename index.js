const { app } = require("./app");
const { dev } = require("./config/config");;

const PORT=dev.app.PORT;


app.listen(PORT,async()=>{
    console.log(`http://localhost:${PORT}`);
    require("./config/db");
})