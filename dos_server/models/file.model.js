const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    randomFileName: {
        type: String,
        required: true
    }
}, {timestamps: true});

const File = mongoose.model('File', fileSchema);

module.exports = {
    File
}