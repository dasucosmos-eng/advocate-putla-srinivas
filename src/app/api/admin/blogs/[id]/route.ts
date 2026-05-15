import { NextRequest, NextResponse } from "next/server";

const ADMIN_TOKEN = "x-admin-token";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = request.headers.get(ADMIN_TOKEN);
  if (!token) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const { db } = await import("@/lib/db");

    const blog = await db.blog.update({
      where: { id },
      data: {
        ...(body.title !== undefined && { title: body.title }),
        ...(body.titleTe !== undefined && { titleTe: body.titleTe }),
        ...(body.excerpt !== undefined && { excerpt: body.excerpt }),
        ...(body.excerptTe !== undefined && { excerptTe: body.excerptTe }),
        ...(body.content !== undefined && { content: body.content }),
        ...(body.contentTe !== undefined && { contentTe: body.contentTe }),
        ...(body.category !== undefined && { category: body.category }),
        ...(body.keywords !== undefined && { keywords: JSON.stringify(body.keywords) }),
        ...(body.readTime !== undefined && { readTime: body.readTime }),
        ...(body.language !== undefined && { language: body.language }),
        ...(body.isPublished !== undefined && { isPublished: body.isPublished }),
      },
    });

    return NextResponse.json({ success: true, blog });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = request.headers.get(ADMIN_TOKEN);
  if (!token) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const { db } = await import("@/lib/db");

    await db.blog.delete({ where: { id } });

    return NextResponse.json({ success: true, message: "Blog deleted" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
