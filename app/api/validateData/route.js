import { NextResponse } from "next/server"

const corsHeaders = {
    "Access-Control-Allow-Origin": "https://sip.imaratdigital.app",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Vary": "Origin"
}

export const OPTIONS = async () => {
    return new NextResponse(null, { status: 204, headers: corsHeaders })
}

const decryptJson = async (encryptedPayload) => {
    const textEncoder = new TextEncoder();
    const textDecoder = new TextDecoder();
    const keyHash = await crypto.subtle.digest("SHA-256", textEncoder.encode(process.env.API_KEY));
    const cryptoKey = await crypto.subtle.importKey("raw", keyHash, { name: "AES-GCM" }, false, ["decrypt"]);
    const iv = Uint8Array.from(atob(encryptedPayload.iv), c => c.charCodeAt(0));
    const ciphertext = Uint8Array.from(atob(encryptedPayload.ciphertext), c => c.charCodeAt(0));
    const decryptedBuffer = await crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, cryptoKey, ciphertext);

    return JSON.parse(textDecoder.decode(decryptedBuffer));
}

const validateInvoiceViaFbr = async (payload, token, type) => {
    try {
        const response = await fetch(`https://gw.fbr.gov.pk/di_data/v1/di/${type == 'validate' ? 'validateinvoicedata_sb' : 'postinvoicedata_sb'}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const res = await response.text()
        return res
    } catch (error) {
        return error
    }
}

export const POST = async (request) => {
    let obj = {
        success: true,
        data: {},
        msg: ''
    }
    try {
        let body = await request.json()
        const json = await decryptJson(body)
        if (!json?.payload || !json?.token || !json.type) {
            obj.msg = 'Invalid payload'
            return new NextResponse(JSON.stringify(obj), { status: 200, headers: corsHeaders })
        }
        const res = await validateInvoiceViaFbr(json.payload, json.token, json.type)
        return new NextResponse(res, { status: 200, headers: corsHeaders })
    } catch (error) {
        obj.success = false
        obj.msg = error.message
        return new NextResponse(JSON.stringify(obj), { status: 500, headers: corsHeaders })
    }
}