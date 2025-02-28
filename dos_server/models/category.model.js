const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mainImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: ''
    },
    isNew: {
        type: Boolean,
        required: false,
        default: false
    }
}, {timestamps: true});

const Category = mongoose.model("Category", categorySchema);

module.exports = {
    Category
}