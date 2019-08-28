const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://RiccardoBolado:Boludo99@testes-lejjq.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

console.log("Connected to mongoloide db");

server.use(express.json());
server.use(routes);

console.log("Escutando o servidor");

server.listen(3333);