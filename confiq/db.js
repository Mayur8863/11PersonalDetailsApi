const Sequelize = require('sequelize');


module.exports = new Sequelize('mayur','root','root',{
    host : '127.0.0.1',
    dialect: 'mysql',
});