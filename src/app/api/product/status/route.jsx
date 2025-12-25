import ConnectDB from "@/lib/database/mongo";
import Product from "@/lib/models/product";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        await ConnectDB()
        const { id } = await req.json()
        if (!id) {
            return NextResponse.json({
                success: false,
                message: 'Id not found',

            }, { status: 400 })
        }
        const product = await Product.findById(id)
        if (!product) {
            return NextResponse.json({
                success: false,
                message: 'Product not found'
            }, { status: 400 })
        }

        if (product.isAvailable) {
            product.isAvailable = false
        } else {
            product.isAvailable = true
        }

        await product.save()

        return NextResponse.json({
            success: true,
            message: "Changed status"
        }, { status: 200 })


    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to change status',
            error: error.message
        }, { status: 500 })

    }

}