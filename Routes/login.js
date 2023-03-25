const express = require('express');
const User = require('../Model/usermodel');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret ="PRT";

router.use(express.json());
router.use(express.urlencoded({extended:false}));

router.post("/login",async(req,res)=>{
    try{

        const {email,password} = req.body;
        const  user = await User.findOne({email:email})
        if(!user){
            return res.status(400).json({
                status:"Failed",
                message:"User is Not Registered"
            })
        }

        bcrypt.compare(password,user.password,function(err,result){
            if(err){
                return res.status(500).json({
                    status:"Failed",
                    message:e.message
                })
            }
            if(result){
                const token= jwt.sign({
                    exp:Math.floor(Date.now()/1000)+(60*60),
                    data:user._id,
                },secret);
                const userdetails ={...user._doc,password:undefined}
                return res.status(201).json({
                    status:"Success",
                    message:{token,userdetails}
                })
            }else{
                res.status(400).json({
                    status:"Failed",
                    message:"Invalid Credentials"
                })
            }
        })

    }catch(e){
        res.status(500).json({
            message:"Failed",
            message:e.message
        })
    }
})

module.exports= router;