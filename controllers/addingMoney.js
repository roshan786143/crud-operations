const User = require('../models/user');
const Wallet = require('../models/wallet');

const addingMoney = async(req,res)=>{
    try{
        const { amount, expense, hasCreditCard, monthlySalary} = req.body;

        console.log(req.user);

        const money = await req.user.createWallet({
            amount,
            hasCreditCard,
            monthlySalary,
            expense
        })
        res.json({meassage: money});
    }catch(err){
        console.log(err);
        res.json({message: 'There\'s an error while adding the user expense'})
    }

}

module.exports = addingMoney;