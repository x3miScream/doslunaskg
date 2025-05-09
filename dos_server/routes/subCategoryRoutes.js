const express = require('express');
const subCategoryController = require('../controllers/subCategoryController.js');
const { processAuth } = require('../middleware/authMiddleware.js');

const router = express.Router();

//Sub Category

router.post('/:categoryId/createSubCategory', processAuth, subCategoryController.createSubCategory);
router.get('/:categoryId/getSubCategories', processAuth, subCategoryController.getSubCategories);
router.post('/:categoryId/createSubCategoriesByBatch', processAuth, subCategoryController.createSubCategoriesByBatch);
router.get('/getSubCategoryByCode/:subCategoryCode', processAuth, subCategoryController.getSubCategoryByCode);

module.exports = router;