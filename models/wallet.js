const { Sequelize , Op, DataTypes} = require('sequelize');

const db = require('../util/db');

const Wallet = db.define('wallet',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    expense: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hasCreditCard: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    monthlySalary: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

// (async()=>{
//     try{
//         await Wallet.sync({force: true});
//         console.log('Wallet table has dropped and created again');
//     }catch(err){
//         console.log(err);
//     }
// })();

// Wallet.sync({force: false})
// .then(()=>console.log('Wallet table has dropped and created again'))
// .catch(err=>console.log(err));

module.exports = Wallet;