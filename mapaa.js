const fs = require('fs');

async function main() {
    try {
        let contenidoStr = await fs.promises.readFile('./package.json', 'utf-8');

        let contenidoObj = JSON.parse(contenidoStr);

        let size = Buffer.from(contenidoStr).length;

        const info = {
            contenidoStr: contenidoStr,
            contenidoObj: contenidoObj,
            size: size
        };

        console.log(info);

        await fs.promises.writeFile('./info.txt', JSON.stringify(contenidoObj));

        console.log('El objeto info se escribió correctamente en info.txt');
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

main();
