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

        res.status(201).send({ status: true, data });

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

module.exports = { createUser };