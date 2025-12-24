import ConnectDB from "@/lib/database/mongo";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


export async function POST(req) {
    try {

        await ConnectDB()
        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json({
                success: false,
                message: 'Please provide email and password'
            }, { status: 400 })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({
                success: false,
                message: 'No account found with this email'
            }, { status: 400 })
        }

        const isMatchPassword = await bcrypt.compare(user.password, password)

        if (!isMatchPassword) {
            return NextResponse.json({
                success: false,
                message: 'Incorrect password'
            }, { status: 400 })
        }


    } catch (error) {

        return NextResponse.json({
            success: false,
            message: 'Failed to login',
            error: error.message
        }, { status: 500 })
    }

}