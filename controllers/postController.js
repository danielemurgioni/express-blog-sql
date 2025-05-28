//recupero la variabile di connessione al database
const connection = require("../data/db")

//metodo index
const index = (req, res) => {

    //variabile querySQL per recuperare i post dal database
    const querySQL = `SELECT * FROM db_blog.posts`

    //eseguo la querySQL con l'utilizzo del metodo "query()"
    connection.query(querySQL, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Database query failed" })
        }
        else {
            console.log(result)
            res.json(result)
        }
    })
}

//metodo show
const show = (req, res) => {
    const id = req.params.id
    res.send(`Post con id: ${id}`)
}

module.exports = { index, show }