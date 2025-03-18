const { deleteFile } = require('./deleteFile');

const handleFileDeletionError = async (filePath, next) => {
    const result = await deleteFile(filePath);
    if (result && typeof result === 'object' && 'statusCode' in result && 'message' in result) {
        return next(result);
    }
    return result;
};

module.exports = { handleFileDeletionError };