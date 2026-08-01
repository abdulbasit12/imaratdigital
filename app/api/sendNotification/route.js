import { firebaseMessageing} from "@/app/lib/firebaseAdmin";
import { NextResponse } from "next/server"

export const POST = async (request) => {
    let obj = {
        success: true,
        data: {},
        msg: ''
    }
    try {
        let body = await request.json()
        const response = await firebaseMessageing().messaging().send(body?.messagePayload || {});
        obj.data = JSON.stringify(response)
        return new NextResponse(JSON.stringify(obj), { status: 200 })
    } catch (error) {
        obj.success = false
        obj.msg = error.message
        return new NextResponse(JSON.stringify(obj), { status: 500 })
    }
}