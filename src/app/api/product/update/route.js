import ConnectDB from "@/lib/database/mongo"
import Product from "@/lib/models/product"
import { NextResponse } from "next/server"
import slugify from "slugify"

export async function POST(req) {
    try {
        await ConnectDB()

        const { title, description, slug, price, discount, id } = await req.json()

        if (!title || !description || !slug || !price || !id) {
            return NextResponse.json({
                success: false,
                message: 'Please fill all data'
            }, { status: 400 })
        }

        const product = await Product.findById(id)

        if (!product) {
            return NextResponse.json({
                success: false,
                message: 'Product not found, invalid id'
            }, { status: 400 })
        }

        const newSlug = slugify(title, { strict: true })

        product.title = title
        product.slug = newSlug
        product.description = description
        product.discount = discount
        product.price = price

        await product.save()

        return NextResponse.json({
            success: true,
            messgae: 'Successfully updated data'
        }, { status: 200 })


    } catch (error) {
        return NextResponse.json({
            success: false,
            message: ' Failed to update product',
            error: error.message,
        }, { status: 500 })

    }

}