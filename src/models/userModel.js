const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        require:true,
        unique:true,
        trim:true,
     
    },
    lastName:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:Number,
        require:true,
        trim:true
    },
    mobileNo:{
        type:Number,
        require:true,
        trim:true
    },
   
    pasword:{
        type:String,
        require:true,
        trim:true
    },
    confirmPasword:{
        type:String,
        require:true,
        trim:true
    },
   
    isDeleted:{
        type:Boolean,
        default:false,
        trim:true
    }


}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)
