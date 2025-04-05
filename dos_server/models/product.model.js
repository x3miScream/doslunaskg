const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    mainImage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File",
        required: true
    },
    otherImages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "File",
        required: false,
        default: false
    }],
    description: {
        type: String,
        required: false
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: false
    },
    productTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductType",
        required: false
    },
    isNewProduct: {
        type: Boolean,
        required: true,
        default: false
    },
    isPopular: {
        type: Boolean,
        required: true,
        default: false
    },
    popularTitle: {
        type: String,
        required: false
    },
    popularDescription: {
        type: String,
        required: false
    },
    isOnSale: {
        type: Boolean,
        required: true,
        default: false
    },
    isOnQuickAccess: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true});


productSchema.virtual('mainImageData',{
    ref: 'File',
    localField: 'mainImage',
    foreignField: '_id',
    justOne: true
});

productSchema.virtual('otherImagesData',{
    ref: 'File',
    localField: 'otherImages',
    foreignField: '_id',
    justOne: false
});

productSchema.virtual('category',{
    ref: 'Category',
    localField: 'categoryId',
    foreignField: '_id',
    justOne: true
});

productSchema.virtual('subCategory',{
    ref: 'SubCategory',
    localField: 'subCategoryId',
    foreignField: '_id',
    justOne: true
});

productSchema.virtual('productType',{
    ref: 'ProductType',
    localField: 'productTypeId',
    foreignField: '_id',
    justOne: true
});

productSchema.set('toObject', { virtuals: true });
productSchema.set('toJSON', { virtuals: true });

const Product = mongoose.model("Product", productSchema);

module.exports = {
    Product
}