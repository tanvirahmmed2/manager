import ConnectDB from "@/lib/database/mongo";
import Order from "@/lib/models/order";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await ConnectDB();

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json({
        success: false,
        message: "Search query is required",
      }, { status: 400 });
    }

    const regex = new RegExp(query, "i");
    const queryAsNumber = Number(query);

    const orders = await Order.find({
      $or: [
        { name: regex },
        { phone: regex },
        { email: regex },
        ...(isNaN(queryAsNumber) 
          ? [{ $expr: { $regexMatch: { input: { $toString: "$orderId" }, regex: query, options: "i" } } }] 
          : [{ orderId: queryAsNumber }])
      ]
    }).limit(20).sort({ createdAt: -1 });

    if (!orders || orders.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'No order Found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully fetched data',
      payload: orders,
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    }, { status: 500 });
  }
}