const fs = require('fs');

try {
    let contenidoStr = fs.readFileSync('package.json', 'utf-8')
    let contenidoObj = JSON.parse(contenidoStr)
    let size = fs.statSync('package.json').size;
    let info = {};
    info.contenidoStr = contenidoStr
    info.contenidoObj = contenidoObj
    info.size = size
    console.log(info)
    fs.writeFileSync('./info.txt', JSON.stringify(info.contenidoObj))
    console.log('Se guardó correctamente el JSON en info.txt');
    } catch (err) {
        console.log(`Hubo un error en la lectura o escritura del archivo: ${err.message}`);
    }
