//importo mysql2
const mysql = require("mysql2")

//variabile per la connessione al database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "db_blog"
})

//utilizzo la variabile con l'uso del metodo "connect"
connection.connect((err) => {
    //verifico se c'è un errore
    if (err) {
        console.log(err)
    }
    else {
        console.log(`connected to MySQL`)
    }
})

module.exports = connection;