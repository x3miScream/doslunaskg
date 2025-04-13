const express = require('express');
const productController = require('../controllers/productController.js');
const { processAuth } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/createProduct', processAuth, productController.createProduct);
router.post('/updateProduct', processAuth, productController.updateProduct);
router.post('/createProductBatch', processAuth, productController.createProductBatch);
router.get('/getProducts', processAuth, productController.getAllProducts);
router.get('/getProductsWithFilter/:filterCriteria', processAuth, productController.getProductsWithFilter);
router.get('/getProduct/:productId', processAuth, productController.getProductById);
router.delete('/deleteProduct/:productId', processAuth, productController.deleteProduct);


module.exports = router;