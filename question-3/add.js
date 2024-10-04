//Question #3

const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    console.log('Logs directory created.');
} else {
    console.log('Logs directory already exists.');
}

process.chdir(logDir);

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(fileName);
}
