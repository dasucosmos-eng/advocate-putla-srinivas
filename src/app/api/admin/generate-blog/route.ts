import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic, category, researchDepth } = body;

    if (!topic) {
      return NextResponse.json(
        { success: false, error: "Topic is required" },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();
    const effectiveCategory = category || "Legal Rights";

    // ─── Step 1: Web Research ───
    let researchContext = "";
    try {
      const searchResult = await zai.functions.invoke("web_search", {
        query: `${topic} law India advocate legal guide ${new Date().getFullYear()}`,
        num: 5,
      });
      if (Array.isArray(searchResult) && searchResult.length > 0) {
        researchContext = searchResult
          .map(
            (r: { snippet?: string; name?: string; url?: string }) =>
              `- ${r.snippet || ""} (Source: ${r.name || r.url || ""})`
          )
          .join("\n");
      }
    } catch {
      console.log("Web search unavailable, proceeding without research");
    }

    // ─── Step 2: Generate SEO Blog ───
    const blogPrompt = `You are an expert legal content writer and SEO specialist for Indian law firms.

ADVOCATE: Advocate Putla Srinivas | Tanuku Court, West Godavari District, Andhra Pradesh | Phone: 9000696403 | Email: srinuputla789@gmail.com | 15+ years experience in Criminal, Civil & Family Law.

RESEARCH DATA:
${researchContext || "Use your expert knowledge."}

TASK: Write a comprehensive SEO blog about: "${topic}"
Category: ${effectiveCategory}
${researchDepth === "deep" ? "Write 1500-2000 words (very detailed)." : "Write 800-1200 words."}

RULES:
1. Title: 55-70 chars, include location keywords (Tanuku, West Godavari, Andhra Pradesh)
2. Meta excerpt: 150-160 chars with primary keyword
3. Include 5-7 SEO keywords for local search
4. Professional but accessible language
5. Sections: Introduction, Legal Framework, How Advocate Can Help, Process/Steps, CTA
6. Reference Indian laws/sections where applicable
7. Last section: CTA to contact Advocate Putla Srinivas (phone 9000696403, email srinuputla789@gmail.com)

Return ONLY valid JSON:
{
  "title": "SEO title",
  "slug": "url-slug",
  "excerpt": "Meta description",
  "category": "${effectiveCategory}",
  "keywords": ["kw1", "kw2", "kw3", "kw4", "kw5"],
  "readTime": "X min read",
  "content": "Full HTML with <h2>, <h3>, <p>, <ul>, <li>, <strong> tags"
}`;

    const blogCompletion = await zai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are an expert legal content writer and SEO specialist. Return valid JSON only. No markdown.",
        },
        { role: "user", content: blogPrompt },
      ],
      temperature: 0.7,
      max_tokens: 4000,
    });

    const responseText = blogCompletion.choices[0]?.message?.content || "";
    const cleanedText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

    let blogData;
    try {
      blogData = JSON.parse(cleanedText);
    } catch {
      blogData = {
        title: `${topic} - Legal Guide by Advocate Putla Srinivas | Tanuku Court`,
        slug: `${topic.toLowerCase().replace(/\s+/g, "-")}-tanuku-lawyer`,
        excerpt: `Expert legal guide on ${topic.toLowerCase()} by Advocate Putla Srinivas at Tanuku Court. Call 9000696403.`,
        category: effectiveCategory,
        keywords: [`${topic.toLowerCase()} lawyer tanuku`, `${topic.toLowerCase()} advocate west godavari`, "tanuku court lawyer", "advocate putla srinivas", "west godavari lawyer"],
        readTime: "6 min read",
        content: `<h2>Understanding ${topic}</h2><p>${topic} is an important legal matter requiring expert guidance. Advocate Putla Srinivas provides comprehensive legal assistance at Tanuku Court.</p><h2>Legal Framework</h2><p>Indian law provides specific provisions for ${topic.toLowerCase()}. Understanding these is essential for protecting your rights.</p><h2>How Advocate Putla Srinivas Can Help</h2><p>With 15+ years of experience at Tanuku Court, Advocate Putla Srinivas offers personalized legal strategies for ${topic.toLowerCase()} cases.</p><h2>Contact Advocate Putla Srinivas</h2><p>Call <strong>9000696403</strong> or email <strong>srinuputla789@gmail.com</strong> for expert assistance.</p>`,
      };
    }

    // ─── Step 3: Telugu Translation ───
    let teluguData: { titleTe?: string; excerptTe?: string; contentTe?: string } | null = null;
    try {
      const translatePrompt = `Translate from English to Telugu. Keep all HTML tags unchanged. Only translate text. Keep legal terms/section numbers in English. Make it natural Telugu.

Title: ${blogData.title}
Excerpt: ${blogData.excerpt}  
Content: ${blogData.content}

Return ONLY JSON: {"titleTe": "...", "excerptTe": "...", "contentTe": "..."}`;

      const translateCompletion = await zai.chat.completions.create({
        messages: [
          { role: "system", content: "Expert English-to-Telugu translator. Return JSON only. No markdown." },
          { role: "user", content: translatePrompt },
        ],
        temperature: 0.3,
        max_tokens: 4000,
      });

      const translateText = translateCompletion.choices[0]?.message?.content || "";
      const cleaned = translateText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      try { teluguData = JSON.parse(cleaned); } catch { console.log("Telugu parse failed"); }
    } catch {
      console.log("Telugu translation failed");
    }

    return NextResponse.json({
      success: true,
      blog: {
        ...blogData,
        titleTe: teluguData?.titleTe || null,
        excerptTe: teluguData?.excerptTe || null,
        contentTe: teluguData?.contentTe || null,
        category: effectiveCategory,
      },
      researchUsed: !!researchContext,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Blog gen error:", message);
    return NextResponse.json({ success: false, error: "Failed to generate blog. Try again." }, { status: 500 });
  }
}
