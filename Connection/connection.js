const mongoose = require('mongoose');
const URL="mongodb+srv://SanjayM:Mundasad@1998@cluster0.jfdlxyl.mongodb.net/instaclone?retryWrites=true&w=majority"
async function main(){
    await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology:true})
    console.log("connection done!");

}

module.exports =main;
