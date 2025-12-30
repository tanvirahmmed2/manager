

import mongoose from "mongoose";

const reservationSchema= new mongoose.Schema({
    name:{ type:String, required:true, trim: true},
    email:{ type:String, required:true, trim: true},
    date:{type:Date, required:true, trim: true},
    seats:{ type:Number, required:true, trim: true},
    table:{ type:String, trim: true},
    message:{ type:String, trim: true},
    status:{ type: String, enum:['pending', 'confirmed', 'cancelled'], default:'pending'},
    createAt:{type:Date, default: Date.now}
})

const Reservation= mongoose.models.reservations || mongoose.model('reservations', reservationSchema)

export default Reservation