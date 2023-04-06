const User = require('../models/user');
const colors = require('colors');

const register = async(req,res)=>{
    try{
        const { username, email, password} = req.body;
       const john = await User.create({
            username,
            email,
            password
        })
        console.log('User data successfully stored in our db'.bgGreen);
        console.log(john);
        // res.json({messege: { id, username, email, password }});
        res.json({ messege : john });

    }catch(err){
        res.json('There\'s an error in our db');
        console.log('There\'s an error while storing the user in our db'.bgRed);
        console.log(err);
    }
}

module.exports = register;