const { Category } = require("../models/category.model");

const createCategory = async (req, res) => {
    const {name, mainImage, description, isNew} = req.body;

    const newCategory = await new Category({
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

module.exports = {
    createCategory,
    getCategories
}