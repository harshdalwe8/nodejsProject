const express = require('express');
const router = express.Router();
// impor controller 
const userController = require('../Controllers/userController');

router.get('/getUserList',userController.getAllUser);

router.post('/inserUser',userController.inserUser);

module.exports = {router};