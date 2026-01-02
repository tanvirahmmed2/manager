import ConnectDB from "@/lib/database/mongo";
import Order from "@/lib/models/order";
import { NextResponse } from "next/server";


export async function GET(req,{ params }) {
    try {
        await ConnectDB()
        const { id } = await params
        if (!id) {
            return NextResponse.json({
                success: false,
                message: 'Id not found'
            }, { status: 400 })
        }

        const order = await Order.findById(id)
        if (!order) {
            return NextResponse.json({
                success: false,
                message: 'Order not found'
            }, { status: 400 })
        }
        return NextResponse.json({
            success: true,
            message: 'Successfully fetched data',
            payload: order
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: ' Failed to fetch data',
            error: error.message
        }, { status: 500 })

    }

}