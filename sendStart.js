const fs = require('fs');

let content = '';
fs.readdir('./', (err, files) => {
    if (err) throw err;
    let index = 0;
    for (const file of files) {
        fs.stat(file, (err, stats) => {
            index++;
            if (err) {
                console.error(err);
                return;
            }
            if (stats.isDirectory() && file != '.git' && !file.includes('.')) {
                content = content + `# [${file}](./${file}/${file}.md)\n\n\n`;
                console.log(`[${file}](./${file}/${file}.md)`);
                console.log('这是一个文件夹');
            } else {
                console.log('这是一个文件');
            }
            if (index == files.length) {
                console.log(content);
                fs.writeFile('start.md', content, (err) => {
                    if (err) throw err;
                    console.log('文件已被保存！');
                });
            }

        });
    }


});


