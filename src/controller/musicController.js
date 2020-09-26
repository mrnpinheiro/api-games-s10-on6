const music = require("../model/music.json")

const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(music)
}

module.exports = {
    getAll
}