import { ConnectDB } from "@/lib/mongoose";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    await ConnectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Required data missing" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User doesn't exist" },
        { status: 400 }
      );
    }

    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) {
      return NextResponse.json(
        { success: false, message: "Incorrect password" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json(
      {
        success: true,
        message: "Successfully logged in",
        payload: user,
      },
      { status: 200 }
    );

    response.cookies.set("user_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, 
    });

    return response;

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to login",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
