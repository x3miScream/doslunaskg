const { Category } = require("../models/category.model");

const createCategory = async (req, res) => {
    const {code, name, mainImage, description, isNew} = req.body;

    const newCategory = await new Category({
        code: code,
        name: name,
        mainImage: mainImage,
        description: description,
        isNew: isNew
    });

    try{
        await newCategory.save();
        return res.status(201).json({_id: newCategory._id});
    }
    catch(error){
        return res.status(400).json({messages: [error]});
    }
};

const getCategories = async (req, res) => {
    let categories = [];
    try{
        categories = await Category.find({});

        return res.status(200).json({data: categories});
    }
    catch(error){
        return res.status(500).json({messages: error.message});
    }
};

const getCategoryByCode = async (req, res) => {
    const {categoryCode} = req.params;
    try{
        const category = await Category.findOne({code: categoryCode});
        if(category != null && category != undefined)
            return res.status(200).json({data: category});
        else
            return res.status(400).json({data: null, message: "category not found"});
    }
    catch(error){
        console.log('hey');
        return res.status(500).json({messages: error.message});
    }
};

module.exports = {
    createCategory,
    getCategories,
    getCategoryByCode
}