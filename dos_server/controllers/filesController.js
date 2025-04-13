const {File} = require('../models/file.model.js');
const fs = require('fs');
const {convertToMongoObjectIdAsync} = require('../utils/bsonConverter.js');
const {join} = require('path');
const download = require('image-downloader');
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


const uploadByLink = async (req, res) => {
    const {link} = req.body;

    const uploadedFiles = [];
    const newName = `download_${Date.now()}`;
    const ext = 'jpg'
    const tempFilesPath = join(__dirname, '..\\', process.env.TEMP_UPLOADS_PATH, newName + '.' + ext);

    const uploadOptions = {
        url: link,
        dest: tempFilesPath
    };

    try{
        await download.image(uploadOptions);

        const newFile = await new File({
            fileName: newName + '.' + ext,
            randomFileName: newName + '.' + ext,
            fileSize: 0
        });


        await newFile.save();

        const newFileFolder = join(__dirname, '..\\', process.env.FILE_PATH, newFile._id.toString());
        const newFilePath = join(newFileFolder, newName + '.' + ext);

        fs.mkdir(newFileFolder, { recursive: true }, (createFolderError) => {
            if (createFolderError){
                console.log(`failed to rename file: ${link} with error: ${createFolderError}`);
            }
            else{
                fs.rename(tempFilesPath, newFilePath, (renameError) => {
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
            console.log('upload By Link Success');
            uploadedFiles.push(uploadedFile);
        }
    }
    catch(error){
        console.log(`failed to upload file by link from ${link} with error: ${error}`);
    }

    res.status(200).json(uploadedFiles);
};


const uploadFile = async (req, res) => {
    const uploadedFiles = [];
    
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
                console.log('upload File Success');
                uploadedFiles.push(uploadedFile);
            }
        }
        catch(error){
            console.log(`failed to create the file ${req.files[i].originalname} with error: ${error}`);
        }
    }

    res.status(200).json(uploadedFiles);
};

const deleteFileApi = async (req, res) => {
    const {fileId} = req.params;
    if(await(deleteFile(fileId)))
    {
        res.status(200).json({messages: 'Delete Success'});
    }

    res.status(400).json({messages: 'Something went wrong'});
}

const deleteFile = async (fileId) => {
    try{
        const foundFile = await File.findOne({_id: fileId});

        if(foundFile == null || foundFile == undefined)
            return false;

        // fs.deleteFile(foundFile.filePath);
        await fs.rm(join(__dirname, '..\\', foundFile.folderPath), { recursive: true, force: true }, async (removeDirError) => {
            if(removeDirError)
            {
                console.log(`Failed to remove directory ${foundFile.folderPath} with error: ${removeDirError}`)
            }
            else{
                await File.deleteOne({_id: fileId});
            }
        });

        return true;
    }
    catch(error){
        console.log(`Failed to delete a file ${fileId} with error: ${error}`);
        return false;
    }
};

module.exports = {
    getFileById,
    uploadByLink,
    uploadFile,
    deleteFile,
    deleteFileApi
}