const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb://localhost/Notetaker');
    console.log("connection done!");

}

module.exports =main;
