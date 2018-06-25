var app = require('./config/server')

var server = app.listen(8080, function(){
    console.log('Server ON')
})

var io = require('socket.io').listen(server)

app.set('io',io)

io.on('connection',function(socket){
    console.log('Usuario conectado')

    socket.on('disconnect', function(){
        console.log('Usuario desconectado')
    })

    socket.on('msgParaServidor', function(data){
        socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem})
        socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem})
    })
})

