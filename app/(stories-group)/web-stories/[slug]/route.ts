import { getStoryData } from '@/lib/web-stories/getStory';
import { notFound } from 'next/navigation';

export const runtime = "nodejs";

/* =========================
   Types
========================= */

interface StoryPage {
  title: string;
  image: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface StoryData {
  title: string;
  poster: string;
  publishDate?: string;
  pages: StoryPage[];
}

/* =========================
   Route
========================= */

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const story: StoryData | null = await getStoryData(slug);
  if (!story) notFound();

  const siteUrl = "https://airniza.com";
  const posterUrl = `${siteUrl}${story.poster}`;

  const ampHtml = `<!doctype html>
<html amp lang="en">
<head>
  <meta charset="utf-8">
  <title>${story.title}</title>

  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-story"
    src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>

  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">

  <style amp-boilerplate>
    body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
    animation:-amp-start 8s steps(1,end) 0s 1 normal both}
    @keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
  </style>

  <style amp-custom>
    amp-story {
      font-family: Inter, system-ui, sans-serif;
      color: #ffffff;
    }

    .text-box {
      background: rgba(0,0,0,0.65);
      padding: 20px;
      border-radius: 16px;
      max-width: 90%;
      margin: auto;
      text-align: center;
    }

    h1 {
      font-size: 24px;
      line-height: 1.2;
      margin-bottom: 8px;
    }

    p {
      font-size: 16px;
      line-height: 1.4;
      opacity: 0.9;
    }

    .cta {
      display: inline-block;
      margin-top: 12px;
      padding: 14px 32px;
      background: #0ea5e9;
      color: #fff;
      border-radius: 999px;
      text-decoration: none;
      font-weight: 600;
    }
  </style>
</head>

<body>
  <amp-story
    standalone
    title="${story.title}"
    publisher="Airniza"
    publisher-logo-src="${siteUrl}/web-stories/logo.png"
    poster-portrait-src="${posterUrl}"
  >

    ${story.pages
      .map(
        (page: StoryPage, i: number) => `
      <amp-story-page id="page-${i}" auto-advance-after="7s">
        <amp-story-grid-layer template="fill">
          <amp-img
            src="${page.image}"
            width="720"
            height="1280"
            layout="responsive">
          </amp-img>
        </amp-story-grid-layer>

        <amp-story-grid-layer template="vertical">
          <div class="text-box">
            <h1>${page.title}</h1>
            ${page.description ? `<p>${page.description}</p>` : ``}

            ${
              page.ctaLink
                ? `<a href="${page.ctaLink}" class="cta">
                    ${page.ctaText || "Read More"}
                  </a>`
                : ``
            }
          </div>
        </amp-story-grid-layer>
      </amp-story-page>
    `
      )
      .join("")}

  </amp-story>
</body>
</html>`;

  return new Response(ampHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
