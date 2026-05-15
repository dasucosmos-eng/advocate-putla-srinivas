import { NextRequest, NextResponse } from "next/server";

// Super Admin credentials
const ADMIN_EMAIL = "srinuputla789@gmail.com";
const ADMIN_PASSWORD = "ERP@123";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Generate a simple token
      const token = Buffer.from(
        `${ADMIN_EMAIL}:${Date.now()}:${Math.random().toString(36).slice(2)}`
      ).toString("base64");

      return NextResponse.json({
        success: true,
        token,
        message: "Authentication successful",
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    );
  }
}
