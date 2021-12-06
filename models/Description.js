const Sequelize = require('sequelize');
const db = require('./db');

const Description = db.define('descriptions', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        top: 1
    },
    description: {
        type: Sequelize.STRING(),
        allowNull: true,
        
    }
});

//cria a tabela caso nao exista uma tabela
// Description.sync({ alter: true });

module.exports = Description;