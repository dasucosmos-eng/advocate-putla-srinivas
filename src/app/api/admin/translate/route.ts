import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, title, excerpt } = body;

    if (!content && !title && !excerpt) {
      return NextResponse.json(
        { success: false, error: "Content to translate is required" },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();

    let prompt = "Translate from English to Telugu. Keep HTML tags unchanged. Only translate text. Keep legal terms/section numbers in English. Make it natural Telugu.\n\n";
    prompt += "Return ONLY JSON:\n{";

    const fields: string[] = [];
    if (title) fields.push(`"titleTe": "Telugu translation of: ${title}"`);
    if (excerpt) fields.push(`"excerptTe": "Telugu translation of: ${excerpt}"`);
    if (content) fields.push(`"contentTe": "Telugu translation of the blog content with HTML tags preserved"`);
    prompt += fields.join(",\n  ");
    prompt += "}";

    const completion = await zai.chat.completions.create({
      messages: [
        { role: "system", content: "Expert English-to-Telugu translator for legal content. Return JSON only. No markdown." },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 4000,
    });

    const responseText = completion.choices[0]?.message?.content || "";
    const cleanedText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

    try {
      const translated = JSON.parse(cleanedText);
      return NextResponse.json({ success: true, translated });
    } catch {
      return NextResponse.json({ success: false, error: "Translation failed. Try again." }, { status: 500 });
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: "Translation failed." }, { status: 500 });
  }
}
