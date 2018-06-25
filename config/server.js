var express = require('express')

var consign = require('consign')

var bodyParser = require('body-parser')

var expressValidator = require('express-validator')

// iniciar o objeto do express
var app = express()

// setar as variavieis 'view engine' e 'views' do express
app.set('view engine', 'ejs')
app.set('views', './app/views')

// configurando o middleware express.static
app.use(express.static('./app/public'))

// configurando o middleware body-parser
app.use(bodyParser.urlencoded({extended:true}))

// configurando o middleware express-validator
app.use(expressValidator())

// efetua o autoload das rotas, dos models e dos controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

module.exports = app