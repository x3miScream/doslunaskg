const {Product} = require('../models/product.model.js');
const {File} = require('../models/file.model.js');
const {Category} = require('../models/category.model.js');
const {SubCategory} = require('../models/subCategory.model.js');
const {convertToMongoObjectIdAsync} = require('../utils/bsonConverter.js');
const {getFileInfo} = require('../utils/fileInfoUtil.js');
const {deleteFile} = require('./filesController.js');

const validateProduct = async (product, isNew) => {
    let errors = [];

    if(!product.code)
        errors.push('Product Code cannot be empty');

    if(!product.name)
        errors.push('Product Name cannot be empty');

    if(!product.description)
        errors.push('Product Description cannot be empty');

    if(!product.categoryId)
        errors.push('Category cannot be empty');

    if(product.otherImages == undefined || product.otherImages == null || product.otherImages.length == 0)
        errors.push('Please add at least one image');

    if(isNew)
    {
        const foundProduct = await Product.findOne({code: product.code});

        if(foundProduct != null && foundProduct != undefined)
            errors.push('Product with the same code exists');
    }

    return errors;
}

const createProduct = async (req, res) => {
    let {
        name,
        code,
        mainImage,
        otherImages,
        description,
        categoryId,
        subCategoryId,
        isNewProduct,
        isPopular,
        popularTitle,
        popularDescription,
        isOnSale,
        isOnQuickAccess
    } = req.body;

    const errors = await validateProduct({
        name,
        code,
        mainImage,
        otherImages,
        description,
        categoryId,
        subCategoryId,
        isNewProduct,
        isPopular,
        popularTitle,
        popularDescription,
        isOnSale,
        isOnQuickAccess
    }, true);

    if(errors.length > 0)
    {
        return res.status(400).json({messages: errors});
    }
    
    try{
        mainImage = otherImages[0];

        const newProduct = await new Product({
            name: name,
            code: code,
            mainImage: mainImage,
            otherImages: otherImages,
            description: description,
            categoryId: categoryId,
            subCategoryId: subCategoryId,
            isNewProduct: isNewProduct,
            isPopular: isPopular,
            popularTitle: popularTitle,
            popularDescription: popularDescription,
            isOnSale: isOnSale,
            isOnQuickAccess: isOnQuickAccess
        })

        await newProduct.save();
        return res.status(200).json({_id: newProduct._id});
    }
    catch(error){
        console.log(`Failed to create product with error: ${error}`);
        return res.status(400).json({messages: error});
    }
};


const updateProduct = async (req, res) => {
    let {
        _id,
        name,
        code,
        mainImage,
        otherImages,
        description,
        categoryId,
        subCategoryId,
        isNewProduct,
        isPopular,
        popularTitle,
        popularDescription,
        isOnSale,
        isOnQuickAccess
    } = req.body;

    if(_id == undefined || _id == null)
        return res.status(400).json({messages: ['Product Id is not provided']});    

    const errors = await validateProduct({
        name,
        code,
        mainImage,
        otherImages,
        description,
        categoryId,
        subCategoryId,
        isNewProduct,
        isPopular,
        popularTitle,
        popularDescription,
        isOnSale,
        isOnQuickAccess
    }, false);

    if(errors.length > 0)
    {
        return res.status(400).json({messages: errors});
    }

    try{
        const foundProduct = await Product.findOne({_id: _id});

        if(foundProduct == undefined || foundProduct == null)
            return res.status(400).json({messages: 'Product Not Found'});

        mainImage = otherImages[0];

        foundProduct.name = name;
        foundProduct.description = description;
        foundProduct.categoryId = categoryId;
        foundProduct.subCategoryId = subCategoryId;

        foundProduct.isNewProduct = isNewProduct;
        foundProduct.isPopular = isPopular;
        foundProduct.isOnSale = isOnSale;

        foundProduct.otherImages.filter((item) => {return otherImages.indexOf(item._id.toString()) < 0}).forEach(async (filteredItem) => {
            await deleteFile(filteredItem);

        });

        foundProduct.otherImages = otherImages;
        foundProduct.mainImage = mainImage;

        await foundProduct.save();

        return res.status(200).json({_id: foundProduct._id});
    }
    catch(error){
        console.log(`Failed to update product with error: ${error}`);
        return res.status(400).json({messages: [error]});
    }
};


const createProductBatch = async (req, res) => {

    const {items} = req.body;

    for(let i=0;i<items.length;i++)
    {
        const foundProduct = await Product.findOne({code: items[i].code});

        if(foundProduct != null && foundProduct != undefined)
        {
            foundProduct.description = items[i].description;

            try{
                await foundProduct.save();
            }
            catch(error){
                console.log(`failed updating: ${items[i].id} - ${error.message}`);
            }
        }
        else
        {
            if(items[i].subCategoryId == '')
                items[i].subCategoryId = undefined;
            console.log(items[i].subCategoryId)

            const newProduct = await new Product({
                name: items[i].name,
                code: items[i].code,
                mainImage: items[i].mainImage,
                otherImages: items[i].otherImages,
                description: items[i].description,
                categoryId: items[i].categoryId,
                subCategoryId: items[i].subCategoryId,
                isNewProduct: items[i].isNewProduct,
                isPopular: items[i].isPopular,
                popularTitle: items[i].popularTitle,
                popularDescription: items[i].popularDescription,
                isOnSale: items[i].isOnSale,
                isOnQuickAccess: items[i].isOnQuickAccess
            });
    
            try{
                // console.log(newProduct)
                await newProduct.save();
            }
            catch(error){
                console.log(`failed creating: ${items[i].id} - ${error.message}`);
            }
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


const getProductsWithFilter = async (req, res) => {
    try{
        const {filterCriteria} = req.params;

        let productsFilterCriteria = {};
        let productPostQueryFilter = {};

        if(filterCriteria != undefined && filterCriteria != '' && filterCriteria != 'undefined')
        {
            const filterCriteriaObj = JSON.parse(filterCriteria);
            
            console.log(filterCriteriaObj);

            if(filterCriteriaObj.categoryCode != undefined && filterCriteriaObj.categoryCode !== '' && filterCriteriaObj.categoryCode !== '-')
            {
                const category = await Category.findOne({code: filterCriteriaObj.categoryCode});

                if(category != null && category != undefined)
                {
                    productsFilterCriteria.categoryId = category._id;
                    
                    if(filterCriteriaObj.subCategoryCode != undefined && filterCriteriaObj.subCategoryCode != '' && filterCriteriaObj.subCategoryCode != '-')
                    {
                        const subCategory = await SubCategory.findOne({categoryId: category._id, code: filterCriteriaObj.subCategoryCode});

                        if(subCategory != null && subCategory != undefined)
                        {
                            productsFilterCriteria.subCategoryId = subCategory._id;
                        }
                    }
                }
            }

            if(filterCriteriaObj.isNewProduct != undefined && filterCriteriaObj.getFirstN != null && filterCriteriaObj.getFirstN != '')
            {
                productsFilterCriteria.isNewProduct = filterCriteriaObj.isNewProduct;
            }
            
            if(filterCriteriaObj.search != undefined && filterCriteriaObj.search != null && filterCriteriaObj.search != '')
            {
                productsFilterCriteria = {
                    $or: [
                        // {name: `/${filterCriteriaObj.search}/i`}
                        {'name': {$regex : filterCriteriaObj.search, $options: 'i'}}
                    ]
                }
            }


            if(filterCriteriaObj.getFirstN != undefined && filterCriteriaObj.getFirstN != null && filterCriteriaObj.getFirstN != '')
            {
                productPostQueryFilter.getFirstN = filterCriteriaObj.getFirstN
            }
        }

        let products = await Product.find(productsFilterCriteria)
            .populate('category')
            .populate('subCategory')
            .populate('mainImageData');

        if(productPostQueryFilter.getFirstN != undefined && productPostQueryFilter.getFirstN != null && productPostQueryFilter.getFirstN != '')
        {
            products = products.slice(0, productPostQueryFilter.getFirstN);
        }

        return res.status(200).json({data: products});
    }
    catch(error){
        return res.status(500).json({messages: [error.message]});
    }
};

const deleteProduct = async (req, res) => {
    try{
        const {productId} = req.params;
        const product = await Product.findOne({_id: await convertToMongoObjectIdAsync(productId)})

        if(product == undefined || product == null)
            return res.status(400).json({messages: ['Product not found']});    

        product.otherImages.forEach((item) => {
            deleteFile(item);
        });

        if(product.mainImage != null && product.mainImage != undefined)
            deleteFile(product.mainImage);

        await Product.deleteOne({_id: product._id});

        return res.status(200).json({messages: ['Delete Success']});
    }
    catch(error){
        console.log(`Failed to delete product with error: ${error}`);
        return res.status(500).json({messages: [error.message]});
    }
}

module.exports = {
    createProduct,
    updateProduct,
    getProductById,
    getAllProducts,
    createProductBatch,
    getProductsWithFilter,
    deleteProduct
}