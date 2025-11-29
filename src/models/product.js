import mongoose from "mongoose";

const productScehma= new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    }
})


const Product= mongoose.model("products", productScehma)

export default Product