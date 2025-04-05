const {File} = require('../models/file.model.js');
const fs = require('fs');
const {convertToMongoObjectIdAsync} = require('../utils/bsonConverter.js');
const {join} = require('path');
const { json } = require('stream/consumers');

const getFileById = async (req, res) => {
    const {fileId} = req.params;

    const foundFile = await File.findOne({_id: await convertToMongoObjectIdAsync(fileId)});

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


const uploadFile = async (req, res) => {
    const uploadedFiels = [];
    
    for(let i=0;i<req.files.length;i++)
    {
        const {path, originalname, filename, size} = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];

        const newFile = await new File({
            fileName: originalname,
            randomFileName: filename + '.' + ext,
            fileSize: size
        });

        try{
            await newFile.save();

            const newFileFolder = join(__dirname, '..\\', process.env.FILE_PATH, newFile._id.toString());
            const newFilePath = join(newFileFolder, filename + '.' + ext);

            // console.log(`path: ${path}`);
            // console.log(`newFilePath: ${newFilePath}`);

            fs.mkdir(newFileFolder, { recursive: true }, (createFolderError) => {
                if (createFolderError){
                    console.log(`failed to rename file: ${req.files[i].originalname} with error: ${createFolderError}`);
                }
                else{
                    fs.rename(path, newFilePath, (renameError) => {
                        if (renameError) 
                        {
                            console.log(`failed to copy file from temp to file folder: ${req.files[i].originalname} with error: ${renameError}`);;
                        }
                    });
                }
            });

            const uploadedFile = await File.findOne({_id: newFile._id});

            if(uploadedFile != undefined)
            {
                uploadedFiels.push(uploadedFile);
            }
        }
        catch(error){
            console.log(`failed to create the file ${req.files[i].originalname} with error: ${error}`);
        }
    }

    res.status(200).json(uploadedFiels);
};

module.exports = {
    getFileById,
    uploadFile
}