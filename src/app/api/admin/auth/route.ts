import { NextRequest, NextResponse } from "next/server";

// Admin credentials
const ADMIN_USERNAME = "putla_srinivas";
const ADMIN_PASSWORD = "Srinivas@789";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Generate a simple token
      const token = Buffer.from(
        `${ADMIN_USERNAME}:${Date.now()}:${Math.random().toString(36).slice(2)}`
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
