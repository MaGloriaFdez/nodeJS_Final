function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout( () => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        },1000);
    });
};

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre == 'Mary'){
                reject(nombre + " está vetado(a)");
            }else{
                console.log('Bla bla bla..');
                resolve(nombre);
            }

        },1000);
    });

}

function adios(nombre) {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log('Adios ' + nombre);
            resolve();
        },1000);
    });
}; 

console.log('Iniciando proceso...');
hola('Gloria')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log('Terminado el proceso.');
    })
    .catch(error => {
        console.error('Hay un error');
        console.error(error);
    });

