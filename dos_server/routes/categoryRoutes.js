const express = require('express');
const categoryController = require('../controllers/categoryController.js');
const { processAuth } = require('../middleware/authMiddleware.js');

const router = express.Router();

//Category
router.post('/createCategory', processAuth, categoryController.createCategory);
router.get('/getCategories', processAuth, categoryController.getCategories);
router.get('/getCategoryByCode/:categoryCode', processAuth, categoryController.getCategoryByCode);

module.exports = router;