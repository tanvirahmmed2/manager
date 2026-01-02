import ConnectDB from "@/lib/database/mongo";
import WebSite from "@/lib/models/website";
import { NextResponse } from "next/server";


export async function GET(req) {
    try {
        await ConnectDB()

        const websites = await WebSite.find({})
        if (!websites || websites.length === 0) {
            return NextResponse.json({
                success: false,
                message: 'No website data found'
            }, { status: 400 })
        }
        const website = websites[0]
        return NextResponse.json({
            success: true,
            message: 'Successfully fetched data',
            payload: website
        }, { status: 200 })


    } catch (error) {
        return NextResponse.json({
            success: false, message: 'Failed to fetch data', error: error.message
        }, { status: 500 })

    }

}


export async function POST(req) {
    try {
        await ConnectDB()

        const websites = await WebSite.find({})
        if (websites.length>0) {
            return NextResponse.json({
                success: false,
                message: 'Already website details added, Please update'
            }, { status: 400 })
        }

        const {title, bio, tax, tagline, openFrom, openTo, address, socialLink } = await req.json()
        if (!title|| !bio || !tax || !openFrom || !openTo || !tagline || !address || !socialLink) {
            return NextResponse.json({
                success: false,
                message: 'Please fill all information'
            }, { status: 400 })
        }

        const newWebsite = new WebSite({ title, bio, tax, tagline, openFrom, openTo, address, socialLink })

        await newWebsite.save()
        return NextResponse.json({
            success: true,
            message: ' Successfully submited data'
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false, message: 'Failed to submit data', error: error.message
        }, { status: 500 })

    }

}