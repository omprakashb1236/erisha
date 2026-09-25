import { serialize } from "cookie";
import { generateCsrfToken } from "../../utils/csrf";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    // Generate a CSRF token
    const csrfToken = await generateCsrfToken();

    const response = NextResponse.json({ csrfToken });

    // Store the CSRF token in a secure, HTTP-only cookie
    response.headers.set("Set-Cookie", serialize("csrfToken", csrfToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
    }));

    return response;
}