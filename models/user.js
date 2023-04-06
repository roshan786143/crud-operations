const { Sequelize, Op, Model, DataTypes, INTEGER } = require('sequelize');
const db = require('../util/db');
const sequelize = require('../util/db');
const colors = require('colors');
const Wallet = require('./wallet');

const User = db.define('user',{
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'JohnDoe',
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'JohnDoe@gmail.com',
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

// (async()=>{
//     try{
//         await User.sync({force: false});
//         console.log('User model synced successfully'.bgGreen);
//     }catch(err){
//         console.log('There\'s an error while syncing the User model'.bgRed)
//     }
// })();

module.exports = User;