const express = require('express');
const server = express();
const path = require('path');
const bodyParser = require('body-parser');
const database = require('./db');
const Perfil = require('./public/models/profile');
const alert = require('alert'); 


server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true, 
}));

(async() => {
    const database = require('./db');
    const Perfil = require('./public/models/profile');

    try{
        const result = await database.sync();
        console.log(result);

        const resultCreate = await Perfil.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            numberPhone: req.body.numberPhone,
            login: req.body.login,
        })

        console.log(resultCreate);

    } catch(error){
        console.log(error)
    }

})();

server.post('/logar', async(req, res) => {
    const selectUsuario = await Perfil.findOne({
        where: {
            login: req.body.username,
            senha: req.body.password,
        }
    });

    if(selectUsuario !== null){
        res.sendFile(path.join(__dirname+'/index.html'));
    } else {
        alert('Login errado...')
        res.sendFile(path.join(__dirname+'/index.html'))
    }
})

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

server.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/register.html'))
})

server.get('/telaMenu', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/telaMenu.html'))
})

server.listen(3030, ()=> {
    console.log('Servidor esta ok!')
})