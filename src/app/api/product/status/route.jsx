import ConnectDB from "@/lib/database/mongo";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        await ConnectDB()
        const {id}= await req.json()

        
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:'Failed to change status',
            error: error.message
        }, {status:500})
        
    }
    
}