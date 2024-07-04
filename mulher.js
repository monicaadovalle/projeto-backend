const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Mônica do Valle',
        imagem:'https://avatars.githubusercontent.com/u/168143582?s=400&u=165086e8c56b75a9c17c870ac9d70d18a3e0bcec&v=4', 
        minibio:'Estudante de programação ',
    })
}

function mostraPorta () {
    console.log ('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)