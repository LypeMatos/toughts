//IMPORTAÇÃO DE PACOTES
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');

//INICIALIZANDO EXPRESS
const app = express();

//IMPORTANDO O BANCO
const connection = require('./db/conexao');

//MIDDLEWARE


//CONEXÃO
connection.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))



















//Estrutura - OK;
//Inicializando Estrutura - 