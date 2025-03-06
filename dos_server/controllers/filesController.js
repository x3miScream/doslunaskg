const {File} = require('../models/file.model.js');
const {convertToMongoObjectIdAsync} = require('../utils/bsonConverter.js');

const uploadFile = async (req, res) => {

};

const getFileById = async (req, res) => {
    const {fileId} = req.params;

    const foundFile = await File.findOne({_id: await convertToMongoObjectIdAsync(fileId)});

    console.log(foundFile);

    if(foundFile != undefined){
        return res.status(200).json({data: {_id: foundFile._id, 
            filePath: foundFile.filePath,
            url: foundFile.url
        }})
    }
    else{
        return res.status(400).json({messages: 'File not found'});
    }
};

module.exports = {
    getFileById
}