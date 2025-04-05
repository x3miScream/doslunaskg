const mongoose = require('mongoose');

const productTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
}, {timeStamps: true});

const ProductType = mongoose.model('ProductType', productTypeSchema);

module.exports = {
    ProductType
}