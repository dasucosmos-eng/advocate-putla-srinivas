import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { db } = await import("@/lib/db");

    const blogs = await db.blog.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        titleTe: true,
        slug: true,
        excerpt: true,
        excerptTe: true,
        content: true,
        contentTe: true,
        category: true,
        keywords: true,
        readTime: true,
        language: true,
        isPublished: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Parse keywords from JSON string
    const parsedBlogs = blogs.map((blog) => ({
      ...blog,
      keywords: JSON.parse(blog.keywords || "[]"),
      date: blog.createdAt.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }));

    return NextResponse.json({ success: true, blogs: parsedBlogs });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
