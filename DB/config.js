const DataBase = require('mysql2')

const pool = DataBase.createPool({
    connectionLimit: 50,
    host: '127.0.0.1',
    user: 'root',
    database: 'evening_batch',
    password: 'rootUser',
    port: 3306
}).promise();

const query = async function (sql) {
    const conn = await pool.getConnection();
    return conn.query(sql)
        .then(result => {
            console.log('Query results: %o', result);
            return result[0];
        })
        .then((r) => {
            conn.release();
            return r;
        });
};

module.exports= {query};
