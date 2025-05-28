const express = require("express")
const router = express.Router()

//importo il controller
const postController = require("../controllers/postController")

//rotte crud

//rotta index
router.get("/", postController.index)

//rotta details del post
router.get("/:id", postController.show)

module.exports = router;