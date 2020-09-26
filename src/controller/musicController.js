const music = require("../model/music.json")

const newListMusic = music.map(music => {
    const newMusic = {
        id: music.id,
        nome: music.name,
        amostra: music.preview_url,
        nome_album: music.album.name,
        imagem: music.album.url,
        artista: music.artists.name
    }
    return newMusic
})

const getMusic = (request, response) =>{
    console.log(request.url)
    response.status(200).send(newListMusic)
}

const getMusicsbyId = (request, response) => {
    const id = request.params.id
    const musics = newListMusic.find(music => music.id == id)
    response.status(200).send(musics)
}

module.exports = {
    getMusic,
    getMusicsbyId
}