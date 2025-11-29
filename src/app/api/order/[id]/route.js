import { ConnectDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await ConnectDB()
        
    } catch (error) {
        return NextResponse.json({
                    success: false,
                    message: "Failed to fetch order",
                    error: error
                }, { status: 500 })
    }
    
}