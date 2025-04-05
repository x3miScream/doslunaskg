const express = require('express');
const multer = require('multer');
const filesController = require('../controllers/filesController.js');
const { processAuth } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/getFile/:fileId', processAuth, filesController.getFileById);

const photosMiddleware = multer({dest: 'uploadedDocuments'});
router.post('/uploadFile', processAuth, photosMiddleware.array('photos', 100), filesController.uploadFile);

module.exports = router;