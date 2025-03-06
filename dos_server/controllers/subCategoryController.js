const {SubCategory} = require('../models/subCategory.model.js');
const {Category} = require('../models/category.model.js');
const mongoose = require('mongoose');
const {convertToMongoObjectIdAsync} = require('../utils/bsonConverter.js');



const createSubCategory = async (req, res) => {
    const {categoryId: categoryId} = req.params;
    const {code, name} = req.body;

    const foundCategory = await Category.findOne({_id: categoryId});

    if(foundCategory == null)
        return res.status(400).json({messages: ['Category not found']});``
    
    
    const newSubCategory = await new SubCategory({
        categoryId: categoryId,
        code: code,
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



const createSubCategoriesByBatch = async (req, res) => {
    const {categoryId: categoryId} = req.params;
    const {items} = req.body;

    for(let i=0;i<items.length;i++)
    {
        const newSubCategory = await new SubCategory({
            categoryId: categoryId,
            code: items[i].code,
            name: items[i].name
        });
    
        try{
            await newSubCategory.save();
        }
        catch(error){
            console.log(`failed: ${items[i].id} - ${error.message}`);
        }
    }

    return res.status(200).json({data: {}});
};




const getSubCategories = async (req, res) => {
    const {categoryId: categoryId} = req.params;
    
    try{
        const subCategories = await SubCategory.find({categoryId: await convertToMongoObjectIdAsync(categoryId)});
        return res.status(200).json({data: {subCategories}});
    }
    catch(error){
        return res.status(500).json({messages: error.message});
    }
};

module.exports = {
    createSubCategory,
    getSubCategories,
    createSubCategoriesByBatch
};