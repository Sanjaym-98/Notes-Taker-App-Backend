const express = require('express');
const User = require('../Model/usermodel');
const router = express.Router();
const bcrypt = require('bcrypt');

router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.post("/register", async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user =await User.findOne({email});
        if(user){
            return res.status(409).json({
                status:"Failed",
                message:"User Already Exists"
            })
        }
    
        bcrypt.hash(password,10,async function (err,hash){
            if(err){
                return res.status(500).json({
                    status:"Failed",
                    message:e.message
                })
            }
            const data = await User.create({
                email,
                password:hash
            })
            return res.status(201).json({
                status:"success",
                message:"Registration done successfully",
                data
            })
        })


    }catch(e){
        res.status(500).json({
            message:"Failed",
            message:e.message
        })
    }
})

module.exports = router;
