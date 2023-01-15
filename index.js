const express = require('express');
const server = express();
const filmes = require('./backend/src/data/filmes.json');
const path = require('path')

server.get('/filmes', (req, res) =>{
    return res.json(filmes)
})

server.get('/tela', (req, res) => {
    res.sendFile(path.join(__dirname + '/sorteioNúmero.html'))
})

server.get('/tela', (req, res) => {
    res.sendFile(path.join(__dirname + '/calculadora.html'))
})

server.get('/tela', (req, res) => {
    res.sendFile(path.join(__dirname + '/citarFamoso.html'))
})

server.get('/tela', (req, res) => {
    res.sendFile(path.join(__dirname + '/qrcode.html'))
})

server.get('/tela', (req, res) => {
    res.sendFile(path.join(__dirname + '/tradutorVoz.html'))
})

server.get('/tela', (req, res) => {
    res.sendFile(path.join(__dirname + '/github.html'))
})

server.listen(3000, ()=> {
    console.log('Servidor esta ok!')
})