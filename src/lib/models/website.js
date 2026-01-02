import mongoose from "mongoose"


const websiteSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        default: 'WebSite',
        required:true
    },
    address: {
        type: String,
        trim: true,
        required:true
    },
    tagline: {
        type: String,
        trim: true,
        required:true
    },
    socialLink: {
        type: String,
        trim: true,
        required:true
    },
    tax: {
        type: Number,
        trim: true,
        required:true
    },
    openFrom: {
        type: String,
        trim: true,
        required:true
    },
    openTo: {
        type: String,
        trim: true,
        required:true
    },
    bio: {
        type: String,
        trim: true,
        required:true
    },
})

const WebSite= mongoose.models.websites || mongoose.model('websites', websiteSchema)

export default WebSite