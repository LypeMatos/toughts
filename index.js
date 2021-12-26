//IMPORTAÇÃO DE PACOTES
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');

//IMPORTANDO MODELS
const Tought = require('./models/Toughts');
const User = require('./models/User');

//IMPORTANDO ROTAS
const toughtsRoutes = require('./routes/toughtsRoutes');
const authRoutes = require('./routes/authRoutes');

//IMPORTANDO CONTROLLERS
const toughtsController = require('./controllers/toughtsController');

//INICIALIZANDO EXPRESS
const app = express();

//PASTA ESTÁTICA
app.use(express.static('public'));

//IMPORTANDO O BANCO
const connection = require('./db/conexao');

//TEMPLATE ENGINE
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//MIDDLEWARE
app.use(session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
        logFn: function() {},
        path: require('path').join(require('os').tmpdir(), 'sessions')
    }),
    cookie: {
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
    }
}))

//FLASH MESSAGES
app.use(flash());

//SETAR A SESSION PARA RESPOSTA
app.use((req, res, next) => {
    if(req.session.userid){
        res.locals.session = req.session
    }

    next();
})

//RECEBAR RESPOSTA DO BODY
app.use(express.urlencoded({
        extended: true
    })
)

app.use(express.json());

//ROTAS
app.use('/toughts' , toughtsRoutes);
app.use('/', authRoutes);
app.use('/', authRoutes);

app.get('/', toughtsController.showToughts);

//CONEXÃO
connection.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))

//Estrutura - OK;
//Inicializando Estrutura - OK;
//Finalizando Estrutura - OK;
//Criando os Models - OK;
//Criando a Home Page - OK;
//CSS da Home - OK;
//Validação do Usuário - 