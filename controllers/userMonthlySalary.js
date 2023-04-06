const User = require('../models/user');
const Wallet = require('../models/wallet');

const userMonthlySalary = async(req,res)=>{
    try{
        const monthlySalary = await User.findOne({
            where: {
                email: 'roshanbabu.kng786@gmail.com',
                include: [Wallet]
            }
        })
        res.json({message: monthlySalary});
    }catch(err){
        console.log(err);
        res.json({message: 'There\'s an error while getting the user monthly salary'});
    }
}

module.exports = userMonthlySalary;