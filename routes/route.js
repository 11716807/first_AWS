const router=require("express").Router();

router.get("/",(req,res)=>{
    res.send("well this all I know...");
});

module.exports=router;