//IMPORTAR SEQUELIZE
const {Sequelize} = require('sequelize');

//CONEXÃO COM O BANCO
const sequelize = new Sequelize('toughts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso!');
} catch (error) {
    console.log('Não foi possivel conectar: ', error);
}

module.exports = sequelize;