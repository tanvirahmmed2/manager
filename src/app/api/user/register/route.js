import ConnectDB from "@/lib/database/mongo";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import User from "@/lib/models/user";


export async function POST(req) {
    try {
        await ConnectDB()

        const { name, email, password, role } = await req.json()
        if (!name || !email || !password || !role) {
            return NextResponse.json({
                success: false,
                message: 'Please fill all information'
            }, { status: 400 })
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await User({ name, email, password: hashedPass, role })

        await newUser.save()

        return NextResponse.json({
            success: true,
            message: 'Successfully created user',
            payload: newUser
        }, { status: 200 })



    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to create user',
            error: error.message
        }, { status: 500 })
    }

}