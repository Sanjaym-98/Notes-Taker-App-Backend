const router= require("express").Router();
const express = require('express');
const Notes =require("../Model/notesmodel");
const bodyparser = require("body-parser")

router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}));

router.post("/notes",async(req,res)=>{
    try{    
        const userId = req.userId
        const post ={
            title:req.body.title,
            description:req.body.description
        }
        const data = await Notes.create(post)
        res.status(201).json({
            status:"Success",
            message:"Posted successfuly",
            data
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})


router.get("/notes",async(req,res)=>{
    try{    
      
        const data = await Notes.find({})
        res.status(201).json({
            status:"Success",
            message:"Posted successfuly",
            data
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})


router.delete("/notes",async(req,res)=>{
    try{    
      
        const data = await Notes.deleteMany({})
        res.status(201).json({
            status:"Success",
            message:"Posted successfuly",
            data
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})





router.delete("/notes/:id",async(req,res)=>{
    try{    
      
        const data = await Notes.deleteOne({_id:req.params.id})
        res.status(201).json({
            status:"Success",
            message:"Posted successfuly",
            data
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})
router.put("/notes/:id",async(req,res)=>{
    try{    
      
        const data = await Notes.updateOne({_id:req.params.id},req.body)
        res.status(201).json({
            status:"Success",
            message:"Posted successfuly",
            data
        })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})






module.exports = router;