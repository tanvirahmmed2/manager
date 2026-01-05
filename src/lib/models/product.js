import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    slug: {
        type: String,
        trim: true,
        required: true,
        unique: [true, 'Please choose another title']
    },
    description: {
        type: String,
        required: true
    },
    wholeSalePrice: {
        type: Number,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    unit: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
        trim: true,
        required: true,
    },
    imageId: {
        type: String,
        trim: true,
        required: true,
    },
    category: {
        type: String,
        trim: true,
        required: true,
    },
    stock: {
        type: Boolean,
        default: true
    },
    quantity: {
        type: Number,
        trim: true,
        default: 1
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    discount: {
        type: Number,
        trim: true,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Product = mongoose.models.products || mongoose.model('products', productSchema)

export default Product