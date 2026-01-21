import { NextResponse } from "next/server";
import posts from "@/data/posts.json";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return new NextResponse("Post Not Found", { status: 404 });
  }

  // Sidebar Logic: Current post exclude karke latest 5 posts
  const latestStories = [...posts]
    .filter((p) => p.slug !== slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const sidebarHtml = latestStories
    .map(
      (story) => `
    <li style="display: flex; gap: 15px; margin-bottom: 20px; align-items: flex-start;">
      <img src="${story.image}" style="width: 70px; height: 50px; object-fit: cover; border-radius: 2px;" alt="${story.title}" loading="lazy">
      <a href="/air-quality/${story.slug}" style="color: #1a1a1a; text-decoration: none; font-size: 1rem; font-weight: 500; line-height: 1.4;">${story.title}</a>
    </li>
  `,
    )
    .join("");

  // Date Formatting (GP Style: January 20, 2026)
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const css = `
    :root { --gp-container: 1150px; --gp-bg: #efefef; --gp-white: #ffffff; --link-color: #1a73e8; }
    * { box-sizing: border-box; }
    body { font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 0; color: #333; line-height: 1.6; background: var(--gp-bg); }
    
    /* Header & Nav Toggle */
    .site-header { background: #fff; border-bottom: 1px solid rgba(0,0,0,0.05); position: relative; }
    .nav-container { max-width: var(--gp-container); margin: 0 auto; padding: 0 30px; display: flex; justify-content: space-between; align-items: center; height: 75px; }
    .site-logo a { font-size: 1.7rem; font-weight: 800; color: #222; text-decoration: none; text-transform: uppercase; }

    #menu-toggle { display: none; }
    .menu-icon { display: none; cursor: pointer; padding: 10px; }
    .navicon { background: #333; display: block; height: 2px; position: relative; width: 22px; }
    .navicon:before, .navicon:after { background: #333; content: ''; display: block; height: 100%; position: absolute; width: 100%; transition: all .2s; }
    .navicon:before { top: 7px; } .navicon:after { top: -7px; }

    .nav-menu { display: flex; list-style: none; margin: 0; padding: 0; }
    .nav-menu li { margin-left: 25px; }
    .nav-menu a { text-decoration: none; color: #333; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; }

    /* Main Grid: WordPress/GP Separate Containers */
    .site-content { max-width: var(--gp-container); margin: 30px auto; display: grid; grid-template-columns: 1fr 320px; gap: 30px; padding: 0 30px; }
    
    main { background: var(--gp-white); padding: 45px; border-radius: 2px; box-shadow: 0 0 15px rgba(0,0,0,0.02); }
    
    /* Post Header */
    h1 { font-size: 2.6rem; line-height: 1.2; color: #000; margin: 0 0 15px 0; font-weight: 700; }
    .entry-meta { font-size: 0.9rem; color: #666; margin-bottom: 30px; border-bottom: 1px solid #f2f2f2; padding-bottom: 15px; }
    .entry-meta strong { color: #333; }
    
    .featured-img { width: 100%; height: auto; margin-bottom: 40px; display: block; border-radius: 2px; }

    /* Content Styling (H2, H3, Links, Captions) */
    .content { font-size: 1.25rem; color: #222; line-height: 1.8; }
    .content h2 { font-size: 1.9rem; margin: 1.5em 0 0.5em; font-weight: 700; color: #000; }
    .content h3 { font-size: 1.5rem; margin: 1.2em 0 0.5em; font-weight: 700; color: #111; }
    .content p { margin-bottom: 1.5em; }
    .content a { color: var(--link-color); text-decoration: underline; }
    .content figure { margin: 35px 0; padding: 0; }
    .content figcaption { text-align: center; font-size: 0.9rem; color: #666; margin-top: 10px; font-style: italic; }
    .content img { max-width: 100%; height: auto; border-radius: 2px; }

    /* Sidebar Styling (Sticky on Desktop) */
    .sidebar-inner { background: #fff; padding: 30px; border-radius: 2px; box-shadow: 0 0 15px rgba(0,0,0,0.02); }
    .sidebar-sticky { position: -webkit-sticky; position: sticky; top: 20px; height: fit-content; }
    .widget-title { font-size: 0.9rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 25px; border-bottom: 2px solid #222; display: inline-block; padding-bottom: 5px; }

    footer { background: #1a1a1a; color: #ccc; padding: 10px 0; text-align: center; margin-top: 50px; font-size: 0.9rem; }

    /* Responsive Handling */
    @media (max-width: 1024px) {
      .menu-icon { display: block; }
      .nav-menu { 
        display: none; position: absolute; top: 75px; left: 0; width: 100%; 
        background: #fff; border-top: 1px solid #eee; flex-direction: column; padding: 10px 0;
        box-shadow: 0 10px 15px rgba(0,0,0,0.05); z-index: 99;
      }
      #menu-toggle:checked ~ .nav-menu { display: flex; }
      .nav-menu li { margin: 0; }
      .nav-menu a { padding: 15px 30px; border-bottom: 1px solid #f9f9f9; display: block; }

      .site-content { grid-template-columns: 1fr; padding: 0 20px; margin: 20px auto; }
      main { padding: 35px 25px; }
      .sidebar-sticky { position: static; margin-top: 30px; }
      h1 { font-size: 2.1rem; }
    }

    @media (max-width: 768px) {
      .site-content { padding: 0 10px; margin: 10px auto; }
      main { padding: 30px 20px; }
      h1 { font-size: 1.8rem; }
      .content { font-size: 1.15rem; }
    }
  `;

  const html = `
    <!DOCTYPE html>
    <html lang="en-US">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${post.title}</title>

      <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-C4HYV9CTDC"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-C4HYV9CTDC');
  </script>
  <!-- End Google Analytics -->

      <!-- RSS Feed -->
  <link rel="alternate" type="application/rss+xml" title="Airniza RSS Feed" href="https://airniza.com/feed.xml">

      <meta name="description" content="${post.excerpt}">
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
      <link rel="canonical" href="https://airniza.com/air-quality/${post.slug}">
      <meta name="googlebot" content="max-image-preview:large">


      
      <!-- Open Graph (Google Discover + FB) -->
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${post.title}">
  <meta property="og:description" content="${post.excerpt}">
  <meta property="og:url" content="https://airniza.com/air-quality/${post.slug}">
  <meta property="og:site_name" content="Airniza">
  <meta property="og:image" content="https://airniza.com${post.image}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="675">
  <meta property="og:image:type" content="image/jpg">
  <meta property="og:image:alt" content="${post.title}">

   <!-- Article Meta -->
  <meta property="article:published_time" content="${post.date}">
  <meta property="article:modified_time" content="${post.date}">
  <meta property="article:author" content="Muffin R.">
  <meta property="article:section" content="Air Quality">
  <meta name="news_keywords" content="${post.keywords}">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${post.title}">
  <meta name="twitter:description" content="${post.excerpt}">
  <meta name="twitter:image" content="https://airniza.com${post.image}">
      
      <style>${css}</style>

      <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://airniza.com/air-quality/${post.slug}"
  },
  "headline": "${post.title}",
  "description": "${post.excerpt}", 
  "image": [{
    "@type": "ImageObject",
    "url": "https://airniza.com${post.image}",
    "width": 1200,
    "height": 675
  }],
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://airniza.com${post.image}",
    "width": 1200,
    "height": 675
  },
  "datePublished": "${post.date}",
  "dateModified": "${post.date}",
  "isAccessibleForFree": true,
  "author": {
    "@type": "Person",
    "name": "Muffin R.",
    "url": "https://airniza.com/about-us"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Airniza",
    "logo": {
      "@type": "ImageObject",
      "url": "https://airniza.com/logo.png"
    },
    "sameAs": [
      "https://www.facebook.com/share/1QneFG8aYw/",
      "https://x.com/airniza_real"
    ]
  }
}
</script>

    </head>
    <body>
      <header class="site-header">
        <nav class="nav-container" aria-label="Main Navigation">
          <div class="site-logo"><a href="/">AIRNIZA</a></div>
          
          <input type="checkbox" id="menu-toggle">
          <label for="menu-toggle" class="menu-icon"><span class="navicon"></span></label>
          
          <ul class="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/disclaimer">Disclaimer</a></li>
          </ul>
        </nav>
      </header>

      <div class="site-content">
        <main>
          <article>
            <header>
              <h1>${post.title}</h1>
              <div class="entry-meta">
             <time datetime="${post.date}">${formattedDate}</time>
                        by 
                          <strong>
                         <a href="/about-us#muffin-r" rel="author" title="About the author Muffin R.">
                                  Muffin R.
                             </a>
                            </strong>
                  </div>

            </header>
            
            <img src="${post.image}" alt="${post.title}" class="featured-img" fetchpriority="high">
            
            <div class="content">
              ${post.content}
            </div>
          </article>
        </main>

        <aside class="sidebar-container">
          <div class="sidebar-sticky">
            <div class="sidebar-inner">
              <span class="widget-title">Latest Posts</span>
              <ul style="list-style: none; padding: 0; margin: 0;">
                ${sidebarHtml}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <div class="container">
          <p>© 2026 Airniza • Real-time Air Quality Updates & Expert Insights</p>
        </div>
      </footer>
    </body>
    </html>
  `;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
    },
  });
}
