import { getStoryData } from '@/lib/web-stories/getStory';
import { notFound } from 'next/navigation';

// Interfaces for TypeScript
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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const story: StoryData | null = await getStoryData(slug);

  if (!story) {
    notFound();
  }

  const siteUrl = "https://airniza.com";
  const storyUrl = `${siteUrl}/web-stories/${slug}`;
  const posterUrl = `${siteUrl}${story.poster}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": story.title,
    "image": [posterUrl],
    "datePublished": story.publishDate || new Date().toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "Airniza",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/web-stories/logo.png`
      }
    }
  };

  const ampHtml = `<!doctype html>
<html amp lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>${story.title}</title>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
    <link rel="canonical" href="${storyUrl}">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <script type="application/ld+json">${JSON.stringify(schemaData)}</script>

    <style amp-boilerplate>
      body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
      -moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
      -ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
      animation:-amp-start 8s steps(1,end) 0s 1 normal both}
      @-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
      @-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
      @-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
      @keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}
    </style>

    <style amp-custom>
      amp-story {
        font-family: 'Inter', sans-serif;
        color: #fff;
      }

      .layer-center {
        align-content: center;
      }

      .text-card {
        background: rgba(0,0,0,0.7);
        padding: 24px 16px;
        border-radius: 15px;
        text-align: center;
        margin: auto;
        max-width: 90%;
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

      .cta-button {
        background-color: #007bff;
        color: #ffffff;
        padding: 14px 32px;
        border-radius: 50px;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        display: inline-block;
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
        <amp-story-page id="page${i}" auto-advance-after="7s">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="${page.image}"
              width="720"
              height="1280"
              layout="responsive"
            ></amp-img>
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical" class="layer-center">
            <div class="text-card">
              <h1>${page.title}</h1>
              <p>${page.description || ''}</p>
            </div>
          </amp-story-grid-layer>

          ${
            page.ctaLink
              ? `
          <amp-story-cta-layer>
            <div style="text-align:center;">
              <a href="${page.ctaLink}" class="cta-button">
                ${page.ctaText || 'Read More'}
              </a>
            </div>
          </amp-story-cta-layer>
          `
              : ''
          }

        </amp-story-page>
      `
        )
        .join('')}
    </amp-story>
  </body>
</html>`;

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: ampHtml }}
    />
  );
}
