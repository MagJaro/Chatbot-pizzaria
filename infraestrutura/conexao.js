//configurações de conexao

const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    port: '3306',
    user: 'b68b588c84a611',
    password: 'f1e9f634',
    database: 'heroku_6a96edac95d2e52'
})

module.exports = conexao