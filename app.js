const express= require("express");
const app = express();
const router=require("./routes/route");

app.use("/",router);

app.listen(3000,()=>{console.log("your server is running....")});