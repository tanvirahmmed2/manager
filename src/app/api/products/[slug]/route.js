import { ConnectDB } from "@/lib/mongoose";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await ConnectDB();

    const slug = params?.slug;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug is required",
          payload: null,
        },
        { status: 400 }
      );
    }

    const product = await Product.findOne({ slug });

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "No product data available",
          payload: null,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully fetched product data",
        payload: product,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch product",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
