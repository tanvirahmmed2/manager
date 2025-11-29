import { ConnectDB } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await ConnectDB()

        const { name, email, phone, password } = await req.json()

        if (!name || !email || !phone || !password) {
            return NextResponse.json({
                success: false,
                message: 'All required fields must be filled'
            }, { status: 400 })
        }
    } catch (e) {
        return NextResponse.json({ message: 'Failed to register', error: e }, { status: 500 })
    }

}