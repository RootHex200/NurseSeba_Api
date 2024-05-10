const { server } = require("./app");
const { dev } = require("./config/config");;

const PORT=dev.app.PORT;


server.listen(PORT,async()=>{
    console.log(`http://localhost:${PORT}`);
    require("./config/db");
})