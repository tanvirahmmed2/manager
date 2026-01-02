import ConnectDB from "@/lib/database/mongo";
import WebSite from "@/lib/models/website";
import { NextResponse } from "next/server";


export async function GET(req) {
    try {
        await ConnectDB()

        const websites = await WebSite.find({})
        if (!websites) {
            return NextResponse.json({
                success: false,
                message: 'No website data found'
            }, { status: 400 })
        }

        return NextResponse.json({
            success: true,
            message: 'SUccessfully fetched data',
            payload: websites
        }, { status: 200 })


    } catch (error) {
        return NextResponse.json({
            success: false, message: 'Failed to fetch data', error: error.message
        }, { status: 500 })

    }

}