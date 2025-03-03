const {File} = require('../models/file.model.js');
const {convertToMongoObjectIdAsync} = require('../components/bsonConverter.js');

const uploadFile = async (req, res) => {

};

const getFileById = async (req, res) => {
    // const {fileId} = req.body;
    const {fileId} = req.params;

    const foundFile = await File.findOne({_id: await convertToMongoObjectIdAsync(fileId)})

    if(foundFile != undefined){
        return res.status(200).json({data: {_id: foundFile._id, 
            filePath: `/${process.env.FILE_PATH}/${foundFile._id}/${foundFile.randomFileName}`,
            url: `document/${foundFile._id}/${foundFile.randomFileName}`
        }})
    }
    else{
        return res.status(400).json({messages: 'File not found'});
    }
};

module.exports = {
    getFileById
}