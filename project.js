const fs = require('fs');
const path = require('path');

const folderName = process.argv[2] || 'New Project';

try {
    fs.mkdirSync(folderName);
    fs.mkdirSync(path.join(folderName, 'src'));
    fs.mkdirSync(path.join(folderName, 'src', 'js'));
    fs.mkdirSync(path.join(folderName, 'src', 'img'));

    const cssFolder = path.join(folderName, 'src', 'css');
    if (!fs.existsSync(cssFolder)) {
        fs.mkdirSync(cssFolder);
    }
    fs.writeFileSync(path.join(cssFolder, 'styles.css'), '');

    fs.writeFileSync(path.join(folderName, 'index.html'), '');
    fs.writeFileSync(path.join(folderName, 'src', 'js', 'app.js'), '');
} catch (e) {
    console.log('SOMETHING WENT WRONG!!!');
    console.log(e);
}