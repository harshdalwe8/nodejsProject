const db = require('../DB/config')

const userModel = {
    getUserList: async () => {
        let userData = await db.query(`
            select * from users
        `);
        return userData;
    },
    getUserById: async (userId) => {
        try {
            let userData = await db.query(`select * from users where userid = ${userId}
        `);
            return userData;
        } catch (error) {
            console.log(error);
        }
    },
    insertUser: async (userName, userEmail) => {
        let insertedUser = await db.query(`INSERT INTO USERS(username,useremail) VALUES('${userName}','${userEmail}')`);
        return insertedUser;
    },
    updateUser: async (userName, userEmail, userId) => {
        let updatedUser = await db.query(`UPDATE USERS SET username = '${userName}',useremail = '${userEmail}' WHERE userid = ${userId}`);
        return updatedUser;
    },
    deleteUser: async (userId) => {
        let deleteUser = await db.query(`DELETE FROM USERS WHERE userid = ${userId}`);
        return deleteUser;
    }
}

module.exports = userModel;