const cors = require('cors'); // Importa el middleware CORS.
const express = require('express');
const app = express();
const http = require('http');
// const socketIo = require('socket.io');

// const corsOptions = {
//     origin: 'http://localhost:5173/', // Ajusta esta URL según tu cliente Vue.js
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Habilita el uso de credenciales (cookies, encabezados personalizados, etc.) si es necesario.
//   };


// app.use(cors(corsOptions));

//const server = http.createServer(app);
// const io = socketIo(server);
const httpServer = require("http").createServer();

const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:5173"
      }
  });



io.on('connection', (socket) => {
    console.log('Usuario conectado');

    io.emit('messageOut', 'te mando un mensaje de conectado o lo que esta la bd');

    socket.on('message', (message) => {
        console.log('Mensaje recibido:', message);
        // Reenviar el mensaje a todos los clientes conectados.
        io.emit('messageOut', message);
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

const port = process.env.PORT || 3000;

 app.get('/', (req, res) =>{
     res.send('Hola server!')
 });



 httpServer.listen(port, () => {
     console.log(`Servidor escuchando en el puerto ${port}`);
 });
