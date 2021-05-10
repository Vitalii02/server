const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
    password: "root"
})

connection.connect((error) =>{
    if (error){
        return console.log('Ошибка')
    } else {
        return console.log('Все ок')
    }
})

module.exports = connection