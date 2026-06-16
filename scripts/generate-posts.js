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
const appsPublicDir = path.join(publicDir, 'apps');
if (!fs.existsSync(appsPublicDir)) {
  fs.mkdirSync(appsPublicDir, { recursive: true });
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

function getAppAssets(appId) {
  const assets = {
    icon: '',
    featureGraphic: '',
    screenshots: []
  };
  const appDir = path.join(publicDir, 'apps', appId);
  if (fs.existsSync(appDir)) {
    const files = fs.readdirSync(appDir);
    
    // Find icon
    const iconFile = files.find(file => file.startsWith('logo') || file.startsWith('icon'));
    if (iconFile) assets.icon = `/images/apps/${appId}/${iconFile}`;
    
    // Find feature graphic
    const featureFile = files.find(file => file.startsWith('feature') || file.startsWith('banner'));
    if (featureFile) assets.featureGraphic = `/images/apps/${appId}/${featureFile}`;
    
    // Find screenshots in subfolder
    const screenshotsDir = path.join(appDir, 'screenshots');
    if (fs.existsSync(screenshotsDir)) {
      const screenshotFiles = fs.readdirSync(screenshotsDir).filter(file => {
        return fs.statSync(path.join(screenshotsDir, file)).isFile();
      });
      // Sort numerically
      screenshotFiles.sort((a, b) => {
        const numA = parseInt(path.parse(a).name, 10);
        const numB = parseInt(path.parse(b).name, 10);
        if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB;
        }
        return a.localeCompare(b);
      });
      assets.screenshots = screenshotFiles.map(file => `/images/apps/${appId}/screenshots/${file}`);
    }
  }
  return assets;
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

    const postItem = {
      id: dir,
      name: meta.name || '',
      time: meta.time || '',
      tags: meta.tags || [],
      link: meta.link || '',
      playstore: meta.playstore || '',
      appstore: meta.appstore || '',
      appgallery: meta.appgallery || '',
      apk: meta.apk || '',
      techStack: meta.techstack || [],
      type: meta.type || 'post', // Default to post for learn items
      description: description,
      image: imagePath || meta.image || ''
    };

    if (category === 'apps') {
      const appAssets = getAppAssets(dir);
      postItem.icon = appAssets.icon;
      postItem.featureGraphic = appAssets.featureGraphic;
      postItem.screenshots = appAssets.screenshots;
      postItem.video = meta.video || '';
    }

    posts.push(postItem);
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

const apps = generateSection('apps');
fs.writeFileSync(path.join(dataDir, 'apps.json'), JSON.stringify(apps, null, 2));
console.log(`Generated apps.json with ${apps.length} items`);

console.log('Done!');
