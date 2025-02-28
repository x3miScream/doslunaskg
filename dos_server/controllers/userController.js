const {User} = require('../models/user.model.js');
const bcrypt = require('bcryptjs');

const testUserControllerGet = async (req, res) => {
    return res.status(200).json({messages: ["Hi from GET iScream"]});
};


const testUserControllerPost = async (req, res) => {
    return res.status(200).json({messages: ["Hi from POST iScream"]});
};

const createUser = async (req, res) => {
    const {fullName, userName, password, email} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await new User({
        fullName:fullName,
        userName:userName,
        password:hashedPassword,
        salt: salt,
        email: email
    });

    try{
        await newUser.save();

        return res.status(201).json({_id: newUser._id});
    }
    catch(error){
        return res.status(400).json({messages: error.message});
    }
}; 

module.exports = {
    testUserControllerGet,
    testUserControllerPost,
    createUser
}