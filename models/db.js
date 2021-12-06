const Sequelize = require('sequelize');

//conexao
const sequelize = new Sequelize("fichadatabase", "root", "6563", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then( () => {
    console.log("Conexão com banco de dados feita")
}).catch(() => {
    console.log("Erro: conexão com banco de dados não foi feita")
});

module.exports = sequelize;