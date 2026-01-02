import mongoose from "mongoose"


const websiteSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        default: 'WebSite'
    },
    address: {
        type: String,
        trim: true,
        default: 'Dhaka'
    },
    tagline: {
        type: String,
        trim: true,
        default: 'Dhaka'
    },
    socialLink: {
        type: String,
        trim: true,
        default: 'Dhaka'
    },
})

const WebSite= mongoose.models.websites || mongoose.model('websites', websiteSchema)

export default WebSite