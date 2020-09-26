const express = require("express")
const app = express()

const filmes = require("./routes/musicRoute")

app.use("/music", filmes)

module.exports = app