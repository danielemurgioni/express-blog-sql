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

    //recupero l'id
    const id = req.params.id

    //variabile querySQL per recuperare i post con un id segnaposto
    const querySQLpost = `SELECT * FROM db_blog.posts WHERE id = ?`

    //eseguo la querySQL con l'utilizzo del metodo "query()"
    connection.query(querySQLpost, [id], (err, postResult) => {
        if (err) { //messaggio di errore se la querySQL è sbagliata
            res.status(500).json({ error: "Database query failed" })
        }
        if (postResult.length === 0) { //messaggio di errore se il post non viene trovato
            res.status(404).json({ error: "Post not found" })
        }
        else {
            console.log(postResult)
            res.json(postResult)
        }
    })
}

//metodo destroy
const destroy = (req, res) => {

    //recupero l'id
    const id = req.params.id

    //variabile querySQL per cancellare il post con un id segnaposto
    const querySQL = `DELETE FROM posts WHERE id = ?`

    connection.query(querySQL, [id], (err) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }
        else {
            res.sendStatus(204);
        }
    });
};

module.exports = { index, show, destroy }