const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://RiccardoBolado:omnistack@tindev-lejjq.mongodb.net/test?retryWrites=true&w=majorit', {
    useNewUrlParser: true
});

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333);

console.log("started");