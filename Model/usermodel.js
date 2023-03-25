const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const ObjectId = Schema.ObjectId;

const usermodel = new Schema({
    email:{type:String,unique:true},
    password:{type:String,min:6,max:12}
},{timestamps:true})


const user = mongoose.model("usernotes",usermodel);

module.exports =user;