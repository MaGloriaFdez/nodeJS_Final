/*
sirve para el manejo de ficheros
Lo primero es importar el módulo
*/

const fs = require('fs');

// leer fichero
function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    });
}

// escribir a un fichero
function escribir(ruta, contenido){
    fs.writeFile(ruta, contenido, (err) => {
        if (err){
            console.error('No se pudo escribir', err);
        }else{
            console.log('Se escribió correctamente');
        }
        } )
};

// eliminar archivo
function eliminar(ruta){
    fs.unlink(ruta, (err) => {
        if (err){
            console.error('No se pudo eliminar', err);
        }else{
            console.log('Se eliminó correctamente');
        }
    });
};

//leer(__dirname + '/archivo.txt',console.log);
//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo, \n escrito desde un JS');
eliminar(__dirname + '/archivo1.txt');

