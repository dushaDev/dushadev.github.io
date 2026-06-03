const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content');
const dataDir = path.join(__dirname, '../src/data');
const publicDir = path.join(__dirname, '../public/images');

// Ensure output directories exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function parseMetaFile(filePath) {
  const meta = {};
  if (!fs.existsSync(filePath)) return meta;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim().toLowerCase();
      const value = line.substring(colonIndex + 1).trim();
      if (key === 'tags' || key === 'techstack') {
        meta[key] = value.split(',').map(s => s.trim()).filter(Boolean);
      } else {
        meta[key] = value;
      }
    }
  });
  return meta;
}

function getPostImage(postDir, category, postName) {
  const destFolder = path.join(publicDir, category);
  if (fs.existsSync(destFolder)) {
    const files = fs.readdirSync(destFolder);
    const prefix = `${category}_${postName}`;
    const foundFile = files.find(file => {
      const nameWithoutExt = path.parse(file).name;
      return nameWithoutExt === prefix;
    });
    if (foundFile) {
      return `/images/${category}/${foundFile}`;
    }
  }
  return '';
}

function getPostNumber(dirName) {
  const match = dirName.match(/\d+/);
  return match ? parseInt(match[0], 10) : Infinity;
}

function generateSection(category) {
  const sectionDir = path.join(contentDir, category);
  if (!fs.existsSync(sectionDir)) {
    fs.mkdirSync(sectionDir, { recursive: true });
    console.log(`Created empty content folder: ${sectionDir}`);
    return [];
  }

  const posts = [];
  const dirs = fs.readdirSync(sectionDir).filter(file => {
    return fs.statSync(path.join(sectionDir, file)).isDirectory();
  });

  // Sort dirs by post number ascending (e.g. post1, post2, post3...)
  dirs.sort((a, b) => getPostNumber(a) - getPostNumber(b));

  dirs.forEach(dir => {
    const postDir = path.join(sectionDir, dir);
    const metaPath = path.join(postDir, 'meta.txt');
    const contentPath = path.join(postDir, 'content.txt');

    const meta = parseMetaFile(metaPath);
    let description = '';
    if (fs.existsSync(contentPath)) {
      description = fs.readFileSync(contentPath, 'utf8').trim();
    }

    const imagePath = getPostImage(postDir, category, dir);

    posts.push({
      id: dir,
      name: meta.name || '',
      time: meta.time || '',
      tags: meta.tags || [],
      link: meta.link || '',
      techStack: meta.techstack || [],
      type: meta.type || 'post', // Default to post for learn items
      description: description,
      image: imagePath || meta.image || ''
    });
  });

  return posts;
}

console.log('Generating posts from content files...');

const projects = generateSection('projects');
fs.writeFileSync(path.join(dataDir, 'projects.json'), JSON.stringify(projects, null, 2));
console.log(`Generated projects.json with ${projects.length} items`);

const learn = generateSection('learn');
fs.writeFileSync(path.join(dataDir, 'learn.json'), JSON.stringify(learn, null, 2));
console.log(`Generated learn.json with ${learn.length} items`);

console.log('Done!');
