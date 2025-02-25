const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    try{
        console.log(process.env.MONGO_DB_URI);
        const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
        await mongoose.connect(process.env.MONGO_DB_URI, clientOptions);
        console.log('mongodb connection success');
    }
    catch(error){
        console.log(`mongodb connection failed: ${error.message}`);
        console.log(error);
    }
};

module.exports = {
    connectToMongoDB
}