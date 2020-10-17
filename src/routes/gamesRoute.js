/*
/jogos	
A partir de um parâmetro para escolher um determinado jogo, vamos alterar o dado de name, usando o verbo PUT
A partir de um parâmetro para escolher um determinado jogo, vamos alterar o dado de name, usando o verbo PATCH
A partir do parâmetro ID para escolher um determinado jogo, vamos alterar o dado de company desse jogo usando o PUT
A partir de um parâmetro para escolher um determinado jogo, usando o PATCH vamos alterar o dado de company desse jogo

Dica: é dentro do controller que você vai acessar os dados do seu model a partir das requisições e enviar respostas, 
é dentro das rotas que você vai usar os verbos que chama e executa os controllers, 
é dentro do app que você vai usar a rota raiz, 
é dentro do server que você vai chamar o app para escutar a porta e disponibilizar toda a aplicação a partir do localhost.
*/

const express = require("express")
const router = express.Router()
const controller = require("../controller/gamesController")
const cors = require('cors')

router.put("/games/:id", cors(), controller.atualizarPut)
router.patch("/games/:id", cors(), controller.atualizarPatch)

module.exports = router