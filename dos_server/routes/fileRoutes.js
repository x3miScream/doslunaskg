const express = require('express');
const filesController = require('../controllers/filesController.js');
const { processAuth } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/getFile/:fileId', processAuth, filesController.getFileById);

module.exports = router;