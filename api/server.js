const express = require('express')
const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).send('<h1>The server is up!</h1>')
})

server.get('/motd', (req, res) => {
    res.send(`<h1>Today's Message:</h1><p>${process.env.MOTD || "(no message)"}</p>`)
})

module.exports = server;
