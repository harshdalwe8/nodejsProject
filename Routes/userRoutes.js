const express = require('express');
const router = express.Router();
// impor controller 
const userController = require('../Controllers/userController');

router.get('/getUserList',userController.getAllUser);

router.get('/getUserById/:userId',userController.getUserById);

router.post('/inserUser',userController.inserUser);

router.patch('/updateUserById/:userId',userController.updateUser);

router.delete('/deleteUserById/:userId',userController.deleteUser);

module.exports = {router};