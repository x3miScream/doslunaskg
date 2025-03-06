const {Product} = require('../models/product.model.js');
const {convertToMongoObjectIdAsync} = require('../utils/bsonConverter.js');
const {getFileInfo} = require('../utils/fileInfoUtil.js');

const createProduct = async (req, res) => {
    const {
        name,
        code,
        mainImage,
        otherImages,
        description,
        categoryId,
        subCategoryId,
        isNew,
        isPopular,
        popularTitle,
        popularDescription,
        isOnSale,
        isOnQuickAccess
    } = req.body;

    const newProduct = await new Product({
        name: name,
        code: code,
        mainImage: mainImage,
        otherImages: otherImages,
        description: description,
        categoryId: categoryId,
        subCategoryId: subCategoryId,
        isNew: isNew,
        isPopular: isPopular,
        popularTitle: popularTitle,
        popularDescription: popularDescription,
        isOnSale: isOnSale,
        isOnQuickAccess: isOnQuickAccess
    })
    
    try{
        await newProduct.save();
        return res.status(200).json({_id: newProduct._id});
    }
    catch(error){
        return res.status(400).json({messages: [error]});
    }
};


const createProductBatch = async (req, res) => {

    const {items} = req.body;

    for(let i=0;i<items.length;i++)
    {
        const newProduct = await new Product({
            name: items[i].name,
            code: items[i].code,
            mainImage: items[i].mainImage,
            otherImages: items[i].otherImages,
            description: items[i].description,
            categoryId: items[i].categoryId,
            subCategoryId: items[i].subCategoryId,
            isNew: items[i].isNew,
            isPopular: items[i].isPopular,
            popularTitle: items[i].popularTitle,
            popularDescription: items[i].popularDescription,
            isOnSale: items[i].isOnSale,
            isOnQuickAccess: items[i].isOnQuickAccess
        });

        try{
            await newProduct.save();
        }
        catch(error){
            console.log(`failed: ${items[i].id} - ${error.message}`);
        }
    }

    return res.status(200).json({});
};



const getProductById = async (req, res) => {
    try{
        const {productId} = req.params;
        const product = await Product.findOne({_id: await convertToMongoObjectIdAsync(productId)})
            .populate('category')
            .populate('subCategory')
            .populate('mainImageData')
            .populate('otherImagesData');
        return res.status(200).json({data: product});
    }
    catch(error){
        return res.status(500).json({messages: [error.message]});
    }
};

const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({})
            .populate('category')
            .populate('subCategory')
            .populate('mainImageData');

        return res.status(200).json({data: products});
    }
    catch(error){
        return res.status(500).json({messages: [error.message]});
    }
};

module.exports = {
    createProduct,
    getProductById,
    getAllProducts,
    createProductBatch
}