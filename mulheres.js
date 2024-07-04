const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome:'Monica do Valle',
        imagem:'https://avatars.githubusercontent.com/u/168143582?v=4',
        minibio:'Estudante',
    },
    {
        nome:'Rihanna',
        imagem:'https://s2-oglobo.glbimg.com/zax_GjDKf4zqp9YgJ3BEwYA9oZ0=/0x0:1102x787/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/9/r/5TyBmwTvWfdweLBJv9Og/100631548-files-in-this-file-photo-taken-on-september-12-2019-barbadan-singer-rihanna-arrives-fo.jpg',
        minibio:'Cantora sensacional',
    },
    {
        nome:'Beyonce', 
        imagem:'',
        minibio:'Outra cantora legal',
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}


function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)