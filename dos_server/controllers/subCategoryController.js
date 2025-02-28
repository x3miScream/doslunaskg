const {SubCategory} = require('../models/subCategory.model.js');
const {Category} = require('../models/category.model.js');
const mongoose = require('mongoose');

const createSubCategory = async (req, res) => {
    const {categoryId: categoryId} = req.params;
    const {name} = req.body;
    let categoryIdObjectId = '';
    
    try{
        categoryIdObjectId = new mongoose.Types.ObjectId(categoryId);
    }
    catch(error){
        return res.status(400).json({messages: `Invalid CategoryId: ${error.message}`});
    }

    const foundCategory = await Category.findOne({_id: categoryId});

    if(foundCategory == null)
        return res.status(400).json({messages: ['Category not found']});``
    
    
    const newSubCategory = await new SubCategory({
        categoryId: categoryId,
        name: name
    });

    try{
        await newSubCategory.save();
        return res.status(200).json({data: {_id: newSubCategory._id}});
    }
    catch(error){
        return res.status(400).json({messages: error.message});
    }
};

const getSubCategories = async (req, res) => {
    const {categoryId: categoryId} = req.params;
    let categoryIdObjectId = '';
    
    try{
        try{
            categoryIdObjectId = new mongoose.Types.ObjectId(categoryId);
        }
        catch(error){
            return res.status(400).json({messages: `Invalid CategoryId: ${error.message}`});
        }

        const subCategories = await SubCategory.find({categoryId: categoryIdObjectId});
        return res.status(200).json({data: {subCategories}});
    }
    catch(error){
        return res.status(500).json({messages: error.message});
    }
};

module.exports = {
    createSubCategory,
    getSubCategories
};