const mongoose = require('mongoose');

const convertToMongoObjectIdAsync = async (input) => {
    const defulatVlaue = '000000000000'
    
    try{
        return new mongoose.Types.ObjectId(input);
    }
    catch(error){
        return new mongoose.Types.ObjectId(defulatVlaue);
    }
};

module.exports = {
    convertToMongoObjectIdAsync
}