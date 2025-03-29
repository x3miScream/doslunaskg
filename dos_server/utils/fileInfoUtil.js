const getFileInfo = (fileData) => {
    if(fileData == undefined || fileData == null)
        return fileData;

    let result = {...fileData};

    result.filePath = `/${process.env.FILE_PATH}/${fileData._id}/${fileData.randomFileName}`;
    result.url = `${process.env.FILE_PUBLIC_PATH}/${fileData._id}/${fileData.randomFileName}`;

    return result;
};

module.exports = {
    getFileInfo
}