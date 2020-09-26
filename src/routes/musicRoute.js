const express = require("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/", controller.getAll)

module.exports = router