const fs = require('fs');

fs.readFile('package.json', 'utf-8', (error, data) => {
    if (error) {
        console.error(`Error al leer el archivo: ${error.message}`);
        return;
    }

    console.log(data); 

   
    let contenidoObj = JSON.parse(data);
    let size = Buffer.from(data).length;

    const info = {
        contenidoStr: data,
        contenidoObj: contenidoObj,
        size: size
    };

    console.log(info);

    fs.writeFile('./info.txt', JSON.stringify(info.contenidoObj), (error) => {
        if (error) {
            console.error(`Error al escribir el archivo 'info.txt': ${error}`);
        } else {
            console.log(`El archivo se guardó exitosamente en 'info.txt'`);
        }
    });
});