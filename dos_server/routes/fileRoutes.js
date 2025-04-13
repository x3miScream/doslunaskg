const express = require('express');
const multer = require('multer');
const filesController = require('../controllers/filesController.js');
const { processAuth } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/getFile/:fileId', processAuth, filesController.getFileById);

const photosMiddleware = multer({dest: process.env.TEMP_UPLOADS_PATH});
router.post('/uploadFile', processAuth, photosMiddleware.array('photos', 100), filesController.uploadFile);
router.post('/upload-by-link', processAuth, filesController.uploadByLink);
router.delete('/deleteFile/:fileId', processAuth, filesController.deleteFileApi);

module.exports = router;