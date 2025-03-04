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
    isNew: {
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

const Product = mongoose.model("Product", productSchema);

module.exports = {
    Product
}