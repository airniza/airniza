import RSS from 'rss';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const SITE_CONFIG = {
  title: "Airniza",
  description: "Check real-time Air Quality Index (AQI), PM2.5, humidity, and temperature to monitor air pollution instantly.",
  url: "https://airniza.com",
};

// Paths
const STORIES_DIR = path.join(process.cwd(), 'lib/web-stories');
const POSTS_FILE = path.join(process.cwd(), 'data/posts.json');

// TypeScript Interfaces
interface Story {
  title: string;
  description: string;
  poster: string;
  publishDate?: string;
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  keywords?: string;
  date: string;
  image?: string;
  content?: string;
}

export async function GET() {
  const feed = new RSS({
    title: `Web Stories & Articles | ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    site_url: SITE_CONFIG.url,
    feed_url: `${SITE_CONFIG.url}/feed.xml`,
    language: 'en-US',
    image_url: `${SITE_CONFIG.url}/logo.png`,
    custom_namespaces: { 'media': 'http://search.yahoo.com/mrss/' },
  });

  // --- Web Stories ---
  if (fs.existsSync(STORIES_DIR)) {
    const storyFiles = fs.readdirSync(STORIES_DIR).filter(f => f.endsWith('.json'));
    storyFiles.forEach(filename => {
      const data: Story = JSON.parse(fs.readFileSync(path.join(STORIES_DIR, filename), 'utf8'));
      feed.item({
        title: data.title,
        description: data.description,
        url: `${SITE_CONFIG.url}/web-stories/${filename.replace('.json', '')}`,
        guid: `story-${filename.replace('.json', '')}`,
        date: data.publishDate || new Date(),
        author: `${SITE_CONFIG.title} Team`,
        custom_elements: [{
          'media:content': {
            _attr: { 
              url: `${SITE_CONFIG.url}${data.poster}`, 
              medium: 'image', 
              type: data.poster.endsWith('.png') ? 'image/png' : 'image/jpeg', 
              width: 1200 
            }
          }
        }]
      });
    });
  }

  // --- Discover Pages / Posts ---
  if (fs.existsSync(POSTS_FILE)) {
    const postsData: Post[] = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8'));
    postsData.forEach((post: Post) => {
      feed.item({
        title: post.title,
        description: post.excerpt,
        url: `${SITE_CONFIG.url}/air-quality/${post.slug}`,
        guid: `post-${post.slug}`,
        date: post.date || new Date(),
        author: `${SITE_CONFIG.title} Team`,
        custom_elements: post.image ? [{
          'media:content': {
            _attr: { 
              url: `${SITE_CONFIG.url}${post.image}`, 
              medium: 'image', 
              type: post.image.endsWith('.png') ? 'image/png' : 'image/jpeg', 
              width: 1200 
            }
          }
        }] : []
      });
    });
  }

  return new NextResponse(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
