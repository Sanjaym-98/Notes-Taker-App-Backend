const mongoose= require("mongoose");
const ObjectId = require('mongoose').ObjectId;

const notesmodel = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    userId:{type:ObjectId,ref:"usernotes"}
},{timestamps:true})

const notes =mongoose.model("note",notesmodel);
module.exports = notes;
