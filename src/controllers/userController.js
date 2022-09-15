const mongoose = require('mongoose');
const userModel = require('../models/userModel');
const CryptoJS = require('crypto-js');

const createUser = async (req, res) => {
    try {
        const userData = req.body;

        if (Object.keys(userData).length == 0)
            return res.status(400).send({ status: false, message: 'Empty Fields !' })

        let pasword = CryptoJS.AES.encrypt(userData.pasword, 'fantastic4-@$%').toString();

        userData.pasword = pasword;

        const data = await userModel.create(userData);

        return res.status(201).send({ status: true, data });

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

const updateUser = async (req, res) => {

    try{
        let update = req.body
        if(Object.keys(update) == 0 ) return res.status(400).send({status : false, message: "Need One field to be updated !"})
        let pasword = CryptoJS.AES.encrypt(userData.pasword, 'fantastic4-@$%').toString();
        update.pasword = pasword;
        const data = await userModel.findOneAndUpdate({_id : id}, update, {new : true})
        return res.status(200).send({ status: true, data });
    }
    catch (err){
        return res.status(500).send({ status: false, message: err.message });
    }
   
}

const login = async (req, res) => {
    try{
        
    }
    catch(err){
        return res.status(500).send({ status: false, message: err.message });
    }
}

module.exports = { createUser, updateUser, login };