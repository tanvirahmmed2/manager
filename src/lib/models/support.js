import mongoose from "mongoose"


const supportSchema= new mongoose.Schema({
    name:{ type:String, required:true, trim: true},
    email:{ type:String, required:true, trim: true},
    subject:{ type:String, required:true, trim: true},
    message:{ type:String, required:true, trim: true},
    createdAt:{type: Date, default: Date.now}
})

const Support= mongoose.models.supports || mongoose.model('supports', supportSchema)

export default Support