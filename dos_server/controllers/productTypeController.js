const {ProductType} = require('../models/productType.model.js');

const createProductType = async (req, res) => {
    const {code, name} = req.body;

    const newProductType = await new ProductType({
        code: code,
        name: name
    });

    try{
        await newProductType.save();
        return res.status(201).json({_id: newProductType._id});
    }
    catch(error){
        return res.status(400).json({messages: error});
    }
};

const createProductTypeBatch = async (req, res) => {
    const {items} = req.body;

    for(i=0;i<items.length;i++)
    {
        const {code, name} = items[i];

        const newProductType = await new ProductType({
            code: code,
            name: name
        });
    
        try{
            await newProductType.save();
        }
        catch(error){
            console.log(`Failed Creating Product Type ${code}`);
        }
    }

    return res.status(201).json({_id: 0});
};

const getProductTypes = async (req, res) => {
    let productTypes = [];

    try{
        productTypes = await ProductType.find({});
        return res.status(200).json({data: productTypes});
    }
    catch(error){
        return res.status(400).json({messages: error});
    }
};

module.exports = {
    createProductType,
    createProductTypeBatch,
    getProductTypes
}