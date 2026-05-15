import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

const ADVOCATE_NAME = "Putla Srinivas";
const LOCATION = "Tanuku, West Godavari, Andhra Pradesh";

const blogTopics = [
  {
    category: "Criminal Law",
    keywords: "criminal lawyer tanuku, bail lawyer west godavari, criminal defense advocate andhra pradesh, anticipatory bail tanuku court, cyber crime lawyer tanuku",
  },
  {
    category: "Civil Law",
    keywords: "civil lawyer tanuku, property dispute lawyer west godavari, land dispute advocate andhra pradesh, consumer court lawyer tanuku, recovery suit lawyer",
  },
  {
    category: "Family Law",
    keywords: "divorce lawyer tanuku, child custody advocate west godavari, family court lawyer andhra pradesh, maintenance case lawyer tanuku, domestic violence lawyer",
  },
  {
    category: "Legal Rights",
    keywords: "legal rights india, know your rights andhra pradesh, free legal advice tanuku, how to file case in tanuku court, legal consultation west godavari",
  },
  {
    category: "Property Law",
    keywords: "property registration lawyer tanuku, land title verification advocate, property dispute resolution andhra pradesh, real estate lawyer west godavari",
  },
  {
    category: "Court Procedures",
    keywords: "tanuku court procedures, how to file FIR in west godavari, court process andhra pradesh, legal documentation tanuku, advocate near tanuku court",
  },
];

function getRandomTopic() {
  return blogTopics[Math.floor(Math.random() * blogTopics.length)];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userTopic = body.topic as string | undefined;
    const topic = userTopic
      ? { category: userTopic, keywords: userTopic }
      : getRandomTopic();

    const zai = await ZAI.create();

    const prompt = `You are an SEO expert and legal content writer for ${ADVOCATE_NAME}, a senior advocate practicing at Tanuku Court, ${LOCATION}. 
The advocate specializes in Criminal Law, Civil Litigation, and Family Law with over 15 years of experience.

Generate ONE high-quality, SEO-optimized blog article in JSON format. The article must:
- Target the keywords: "${topic.keywords}"
- Be informative, authoritative, and helpful for potential clients searching for legal help in ${LOCATION}
- Include a clear call-to-action to contact ${ADVOCATE_NAME} at phone 9000696403 or email srinuputla789@gmail.com
- Be 800-1200 words long
- Sound professional yet accessible to common people

Return ONLY valid JSON (no markdown, no code fences) in this exact format:
{
  "title": "SEO-optimized blog title (60-70 chars, include location keywords)",
  "slug": "url-friendly-slug",
  "excerpt": "A compelling 150-160 character meta description with primary keyword and location",
  "category": "${topic.category}",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "readTime": "X min read",
  "date": "${new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}",
  "content": "Full HTML blog content with <h2>, <h3>, <p>, <ul>, <li>, <strong> tags. Include 4-5 subsections. Each subsection should have a keyword-rich heading. The last section should be a call-to-action to contact Advocate Putla Srinivas."
}`;

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are an expert legal content writer and SEO specialist. You write blog articles for law firm websites in India. Always return valid JSON only, no markdown formatting.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 3000,
    });

    const responseText = completion.choices[0]?.message?.content || "";

    // Clean and parse JSON
    const cleanedText = responseText
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .trim();

    let blogPost;
    try {
      blogPost = JSON.parse(cleanedText);
    } catch {
      blogPost = {
        title: `Expert ${topic.category} Services in ${LOCATION} | Advocate ${ADVOCATE_NAME}`,
        slug: `${topic.category.toLowerCase().replace(/\s+/g, "-")}-lawyer-tanuku`,
        excerpt: `Looking for the best ${topic.category.toLowerCase()} lawyer in ${LOCATION}? Advocate ${ADVOCATE_NAME} offers expert legal consultation with 15+ years of experience.`,
        category: topic.category,
        keywords: topic.keywords.split(", ").slice(0, 5),
        readTime: "5 min read",
        date: new Date().toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        content: `<h2>Understanding ${topic.category} in ${LOCATION}</h2><p>When facing legal challenges in ${LOCATION}, having the right advocate by your side is crucial. ${ADVOCATE_NAME}, with over 15 years of practice at Tanuku Court, provides expert ${topic.category.toLowerCase()} services to clients across West Godavari District and Andhra Pradesh.</p><h2>Why You Need an Experienced Advocate</h2><p>Legal matters can be complex and overwhelming. Whether you are dealing with ${topic.keywords.split(", ").slice(0, 2).join(" or ")}, having an experienced advocate like ${ADVOCATE_NAME} ensures your rights are protected and your case is handled with the utmost care and expertise.</p><h2>How ${ADVOCATE_NAME} Can Help You</h2><p>With a proven track record of successful cases, ${ADVOCATE_NAME} offers personalized legal strategies tailored to your specific situation. His deep understanding of the local court system and extensive legal knowledge make him the ideal choice for your ${topic.category.toLowerCase()} needs.</p><h2>Contact ${ADVOCATE_NAME} Today</h2><p>Don't face your legal challenges alone. Contact <strong>Advocate ${ADVOCATE_NAME}</strong> for a confidential consultation. Call <strong>9000696403</strong> or email <strong>srinuputla789@gmail.com</strong> to schedule your appointment today.</p>`,
      };
    }

    return NextResponse.json({
      success: true,
      blog: blogPost,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Blog generation error:", message);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate blog post. Please try again.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "AI Blog Generation API for Advocate Putla Srinivas",
    categories: blogTopics.map((t) => t.category),
  });
}
