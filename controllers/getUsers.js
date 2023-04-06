const User = require('../models/user');
const colors = require('colors');

const getUsers = async(req,res)=>{
    try{
        const users = await User.findAll();
        console.log('succuessfully got all users from database'.bgGreen);
        res.status(200).json({message: users});
        console.log(users);
    }catch(err){
        console.log('There\'s an error while getting the users from the database'.bgRed);
        console.log(err);
        res.status(404).json('There\'s an error while getting the users from the db');
    }
}

module.exports = getUsers;