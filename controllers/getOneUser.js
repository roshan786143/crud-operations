const User = require('../models/user');

const getOneUser = async(req,res)=>{
    try{
        const user = await User.findOne({
            where: {
                email: 'roshanbabu.kng786@gmail.com'
            }
        })
        console.log(user);
        res.json({message: user});
    }catch(err){
        res.json({message: 'There\'s no user with the email'});
        console.log(err);
    }
}

module.exports = getOneUser;