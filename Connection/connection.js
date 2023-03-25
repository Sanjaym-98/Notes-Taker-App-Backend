const mongoose = require('mongoose');
const URL = "mongodb+srv://sanjaym1998:EhMHug730tnWkKCB@cluster0.jao4mrc.mongodb.net/Notes?retryWrites=true&w=majority";
async function main(){
    await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology:true})
    console.log("connection done!");

}

module.exports =main;

