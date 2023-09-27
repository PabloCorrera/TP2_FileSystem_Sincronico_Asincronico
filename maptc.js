const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

readFilePromise('./package.json', 'utf-8')
    .then((data) => {
        let contenidoObj = JSON.parse(data);
        let size = Buffer.from(data).length;

        let info = {
            contenidoStr: data,
            contenidoObj: contenidoObj,
            size: size
        };

        console.log(info);

        return writeFilePromise('./info.txt', JSON.stringify(info.contenidoObj));
    })
    .then(() => {
        console.log('El objeto info se escribió correctamente en info.txt');
    })
    .catch((error) => {
        console.error(`Error: ${error.message}`);
    });