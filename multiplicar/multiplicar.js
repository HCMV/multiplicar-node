const fs = require('fs');
var colors = require('colors');

//module.expots.crearArchivo = //forma de hacer
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${ base * i }\n`);
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${limite}.txt`);
        });
    });
}

let listartabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        console.log('=================='.green);
        console.log(`tabla de ${ base }`.green);
        console.log('=================='.green);



        let tabla = '';

        for (let i = 1; i <= limite; i++) {
            tabla += (`${base} * ${i} = ${ base * i }\n`);
        }

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return
        } else {
            resolve(`${ tabla }`);
        }
    });
}

module.exports = {
    crearArchivo,
    listartabla
}