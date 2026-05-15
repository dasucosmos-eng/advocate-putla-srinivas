import { NextRequest, NextResponse } from "next/server";

const ADMIN_TOKEN = "x-admin-token";

export async function GET(request: NextRequest) {
  const token = request.headers.get(ADMIN_TOKEN);
  if (!token) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { db } = await import("@/lib/db");
    const blogs = await db.blog.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true, title: true, titleTe: true, slug: true, excerpt: true, excerptTe: true,
        category: true, keywords: true, readTime: true, language: true,
        isPublished: true, createdAt: true, updatedAt: true,
      },
    });

    return NextResponse.json({ success: true, blogs });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const token = request.headers.get(ADMIN_TOKEN);
  if (!token) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { db } = await import("@/lib/db");

    const slug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") + "-" + Date.now();

    const blog = await db.blog.create({
      data: {
        title: body.title,
        titleTe: body.titleTe || null,
        slug,
        excerpt: body.excerpt,
        excerptTe: body.excerptTe || null,
        content: body.content,
        contentTe: body.contentTe || null,
        category: body.category,
        keywords: JSON.stringify(body.keywords || []),
        readTime: body.readTime || "5 min read",
        language: body.language || "en",
        isPublished: body.isPublished ?? false,
      },
    });

    return NextResponse.json({ success: true, blog });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
