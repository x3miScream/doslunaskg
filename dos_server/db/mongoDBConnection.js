const mongoose = require('mongoose');
const log = require('log-to-file');

const connectToMongoDB = async () => {
    try{
        console.log(`Attempt to connect to ${process.env.MONGO_DB_URI}`);
        const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
        // await mongoose.connect(process.env.MONGO_DB_URI, clientOptions);
        await mongoose.connect(`${process.env.MONGO_DB_URI}`);
        console.log('mongodb connection success');
        log('mongodb connection success')
    }
    catch(error){
        console.log(`mongodb connection failed: ${error.message}`);
        log(`mongodb connection failed: ${error.message}`);
        console.log(error);
    }
};

module.exports = {
    connectToMongoDB
}