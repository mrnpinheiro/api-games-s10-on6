const games = require('../model/games.json')

const atualizarPut = (request, response)=>{
    const gameAtualizado = request.body
    const id = parseInt(request.params.id)

    const gamesIds = games.map(game => game.id)

    const atualizaId = gamesIds.indexOf(id)
    const gamesAtualizadosComId = {id, ...gameAtualizado}
    games.splice(atualizaId, 1, gamesAtualizadosComId)

    response.status(200).send(games.find(game => game.id === id))
}

const atualizarPatch = (request, response)=>{
    const gameAtualizacao = request.body
    const id = parseInt(request.params.id)
    const gameParaAtualizar = games.find(game=>game.id == id)

    Object.keys(gameAtualizacao).forEach((chave)=>{
        gameParaAtualizar[chave] = gameAtualizacao[chave]
    })

    response.status(200).send(games)
}

module.exports = {
    atualizarPut,
    atualizarPatch
}