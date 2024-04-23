const userModel = require('../Models/userMoule');

const userController = {
    getAllUser: async (req, res, next) => {
        let userData = await userModel.getUserList();
        res.send({ userData });
    },
    inserUser: async (req, res, next) => {
        let {userName,userEmail} = req.body;
        let insertedUser = await userModel.insertUser(userName,userEmail);
        res.send({ insertedUser });
    },
}

module.exports = userController;
