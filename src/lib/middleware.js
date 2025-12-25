import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { JWT_SECRET } from "./database/secret"
import User from "./models/user"

export async function isLogin() {
    try {
        const token = await cookies.get('user_token')?.value
        if (!token) return { success: false, message: 'Please login' }

        const decode = await jwt.verify(token, JWT_SECRET)

        const user = await User.findById(decode.id)
        if (!user) return { success: false, message: 'User not found' }
        return { success: true, payload: user }

    } catch (error) {
        return { success: false, error: error.message }

    }

}


export async function isManager() {
    try {
        const token = await cookies.get('user_token')?.value
        if (!token) return { success: false, message: 'Please login' }

        const decode = await jwt.verify(token, JWT_SECRET)

        const user = await User.findById(decode.id)
        if (!user) return { success: false, message: 'User not found' }
        if (user.role === 'manager') return { success: true, payload: user }

    } catch (error) {
        return { success: false, error: error.message }

    }
}


export async function isSales() {
    try {
        const token = await cookies.get('user_token')?.value
        if (!token) return { success: false, message: 'Please login' }

        const decode = await jwt.verify(token, JWT_SECRET)

        const user = await User.findById(decode.id)
        if (!user) return { success: false, message: 'User not found' }
        if (user.role === 'sales') return { success: true, payload: user }

    } catch (error) {
        return { success: false, error: error.message }

    }
}