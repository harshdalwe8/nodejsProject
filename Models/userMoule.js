const db = require('../DB/config')

const userModel = {
    getUserList : async ()=>{
       let userData = await db.query('select * from users');
       return userData;
    },
    insertUser: async (userName,userEmail)=>{
        let insertedUser = await db.query(`INSERT INTO USERS(username,useremail) VALUES('${userName}','${userEmail}')`);
        return insertedUser;
    },
    // todo update and delete code to be done 
}

module.exports = userModel;