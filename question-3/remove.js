//Question #3

const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logDir)) {
    fs.readdirSync(logDir).forEach(file => {
        const filePath = path.join(logDir, file);
        console.log(`delete file...${file}`);
        fs.unlinkSync(filePath);
    });
    
    fs.rmdirSync(logDir);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}
