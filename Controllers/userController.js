const userModel = require('../Models/userMoule');

const userController = {
    getAllUser: async (req, res, next) => {
        let userData = await userModel.getUserList();
        res.send({ userData });
    },
    getUserById: async (req, res, next) => {
        try {
            let userId = req.params.userId;
            let userData = await userModel.getUserById(userId);
            res.send({ userData });
        } catch (error) {
            console.log(error);
        }
    },

    inserUser: async (req, res, next) => {
        let { userName, userEmail } = req.body;
        let insertedUser = await userModel.insertUser(userName, userEmail);
        res.send({ insertedUser });
    },
    updateUser: async (req, res, next) => {
        let userId = req.params.userId;
        let { userName, userEmail } = req.body;
        let updateUser = await userModel.updateUser(userName, userEmail, userId);
        res.send({ updateUser });
    },
    deleteUser: async (req, res, next) => {
        let userId = req.params.userId;
        let deleteUser = await userModel.deleteUser(userId);
        res.send({ deleteUser });
    }
}

module.exports = userController;
