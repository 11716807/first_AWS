const express= require("express");
const app = express();
const router=require("./routes/route");

app.use("/",router);
const port= process.env.port || 3000;

app.listen(port ,()=>{console.log("your server is running....")});
