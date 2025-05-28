const express = require("express")
const router = express.Router()

//rotte crud

//rotta index
router.get("/", (req, res) => {
    res.send("Elenco posts")
})

//rotta details del post
router.get("/:id", (req, res) => {
    const id = req.params.id
    res.send(`Post con id: ${id}`)
})

module.exports = router;