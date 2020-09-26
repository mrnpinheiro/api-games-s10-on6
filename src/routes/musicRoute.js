const express = require("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/", controller.getMusic)
router.get("/:id", controller.getMusicsbyId)

module.exports = router