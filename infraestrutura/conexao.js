//configurações de conexao

const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'cadastra-pizza'
})

module.exports = conexao