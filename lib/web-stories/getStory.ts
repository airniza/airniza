import fs from 'fs';
import path from 'path';

export async function getStoryData(slug: string) {
  try {
    // 1. JSON file ka path setup karein
    const filePath = path.join(process.cwd(), 'lib/web-stories', `${slug}.json`);
    
    // 2. Check karein ki file exist karti hai ya nahi
    if (!fs.existsSync(filePath)) {
      console.error(`Story file not found: ${filePath}`);
      return null;
    }

    // 3. File read karein
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // 4. JSON data ko parse karke return karein
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading story data:", error);
    return null;
  }
}