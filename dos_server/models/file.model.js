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

fileSchema.virtual('filePath').get(function () {
    return `${process.env.FILE_PATH}/${this._id}/${this.randomFileName}`;
});

fileSchema.virtual('url').get(function () {
    return `${process.env.FILE_PUBLIC_PATH}/${this._id}/${this.randomFileName}`;
});

fileSchema.set('toObject', { virtuals: true });
fileSchema.set('toJSON', { virtuals: true });

const File = mongoose.model('File', fileSchema);

module.exports = {
    File
}