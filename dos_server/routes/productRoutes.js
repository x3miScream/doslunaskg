const express = require('express');
const productController = require('../controllers/productController.js');
const { processAuth } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/createProduct', processAuth, productController.createProduct);
router.post('/createProductBatch', processAuth, productController.createProductBatch);
router.get('/getProducts', processAuth, productController.getAllProducts);
router.get('/getProduct/:productId', processAuth, productController.getProductById);

module.exports = router;