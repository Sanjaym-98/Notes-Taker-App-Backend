const express =require('express');
const app =express();
const connection =require('./Connection/connection');
connection();
const loginroutes = require("./Routes/login");
const registerroutes = require("./Routes/register");
const notesroutes =require("./Routes/routes");
const secret ="PRT";
const jwt = require('jsonwebtoken')
const cors = require('cors');
app.use(cors())

app.use("/api/v1/notes",(req,res,next)=>{

    try{
        const token = req.headers.authorization;
        jwt.verify(token,secret,(err,result)=>{
            if(err){
                return res.status(401).json({
                    status:"Failed",
                    message:"Denied Authorization"
                })
            }else{
                req.userId =result.data;
                next()
            }
        })
        
    }catch(e){
        res.status(403).json({
            status:"error",
            message:e.message
        })
    }
})

app.use("/api/v1/",loginroutes);
app.use("/api/v1/",registerroutes);
app.use("/api/v1/",notesroutes);

app.get("*",(req,res)=>{
    res.status(404).send("This is a not a proper request");

})

app.listen(5000,()=>{
    console.log("server is up at 5000");

});