const express = require("express");
const router = express.Router();
const {createUser} = require('../controllers/userController');


//////// APIs 
router.post('/createUser', createUser)


module.exports = router;