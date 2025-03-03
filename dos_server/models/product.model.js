const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: 'Madagascar Centella Asiatica Extract',
    code: {
        type: String,
        required: true
    },
    mainImage: {
        type: String,
        required: true
    },
    otherImages: [{
        type: String,
        required: true,
        default: []
    }],
    description: {
        type: String,
        required: false
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        default: []
    },
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        default: []
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