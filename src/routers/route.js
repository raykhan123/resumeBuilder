const express = require("express");
const router = express.Router();
const {createUser, updateUser,login} = require('../controllers/userController');


//////// APIs 
router.post('/createUser', createUser)
router.put('/updateUset', updateUser)
router.post('/login', login)

module.exports = router;

//2.login
//3.get api
//4.put api