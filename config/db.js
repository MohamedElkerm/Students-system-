const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'studennts_db'
})

module.exports = mySqlPool;