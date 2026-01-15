import RSS from 'rss';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const SITE_CONFIG = {
  title: "Airniza",
  description: "Check real-time Air Quality Index (AQI), PM2.5, humidity, and temperature to monitor air pollution instantly.",
  url: "https://airniza.com",
};

export async function GET() {
  const storiesDirectory = path.join(process.cwd(), 'lib/web-stories');
  const filenames = fs.existsSync(storiesDirectory) ? fs.readdirSync(storiesDirectory) : [];

  const feed = new RSS({
    title: `Web Stories | ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    site_url: SITE_CONFIG.url,
    feed_url: `${SITE_CONFIG.url}/feed.xml`,
    language: 'en-US', // US Targeting
    image_url: `${SITE_CONFIG.url}/logo.png`,
    custom_namespaces: { 'media': 'http://search.yahoo.com/mrss/' },
  });

  filenames.filter(f => f.endsWith('.json')).forEach(filename => {
    const data = JSON.parse(fs.readFileSync(path.join(storiesDirectory, filename), 'utf8'));
    feed.item({
      title: data.title,
      description: data.description,
      url: `${SITE_CONFIG.url}/web-stories/${filename.replace('.json', '')}`,
      guid: filename.replace('.json', ''),
      date: data.publishDate || new Date(),
      author: `${SITE_CONFIG.title} Team`,
      custom_elements: [{
        'media:content': {
          _attr: { url: `${SITE_CONFIG.url}${data.poster}`, medium: 'image', type: 'image/png', width: 1200 }
        }
      }]
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}