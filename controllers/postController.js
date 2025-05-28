
//metodo index
const index = (req, res) => {
    res.send("Elenco posts")
}

//metodo show
const show = (req, res) => {
    const id = req.params.id
    res.send(`Post con id: ${id}`)
}

module.exports = { index, show }