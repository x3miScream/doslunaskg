const express = require('express');
const productTypeController = require('../controllers/productTypeController.js');
const { processAuth } = require('../middleware/authMiddleware.js');

const router = express.Router();

//Product Type
router.post('/createProductType', processAuth, productTypeController.createProductType);
router.post('/createProductTypeBatch', processAuth, productTypeController.createProductTypeBatch);
router.get('/getProductTypes', processAuth, productTypeController.getProductTypes);

module.exports = router;