import { NextResponse } from "next/server"
import { firebaseMessageing } from '@/app/lib/firebaseAdmin'

export const POST = async (request) => {
    let obj = {
        success: true,
        data: {},
        msg: ''
    }
    try {
        let body = await request.json()
        if (body.token) {
            let response = await firebaseMessageing().subscribeToTopic(body.token, body.topic)
            obj.data = response
            obj.success = true
            obj.msg = 'subscribed to the topic successfully.'
            return new NextResponse(JSON.stringify(obj), { status: 200 })
        } else {
            obj.success = false
            obj.msg = 'token not found'
            return new NextResponse(JSON.stringify(obj), { status: 200 })
        }
    } catch (error) {
        obj.success = false
        obj.msg = error.message
        return new NextResponse(JSON.stringify(obj), { status: 500 })
    }
}