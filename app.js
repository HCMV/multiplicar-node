const argv = require('./config/yargs').argv; //lib para trabajar con params
var colors = require('colors'); //lib colores
//const fs = require('express');
//const fs = require('./path');

const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {


    case 'listar':
        listartabla(argv.base, argv.limite)
            .then(listar => console.log(`${ listar }`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, `${ archivo }`.green)) // o ${ archivo.green }
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');

}

//programa
// let base = 'abc';
// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += (`${base} * ${i} = ${ base * i }\n`);
// }

// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${ base }.txt ha sido creado!`);
// });

// let argv2 = process.argv;

// console.log(argv.base);
// console.log(argv.limite);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(process.argv);

//console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));