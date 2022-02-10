// define funcion asincrona que espera hasta que acabe
async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout( () => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        },1000);
    });
};

async function hablar(nombre){
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

async function adios(nombre) {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log('Adios ' + nombre);
            resolve();
        },1000);
    });
}; 

async function main(){
    let nombre = await hola ('Gloria');
    await hablar(nombre);
    await hablar(nombre);
    await adios(nombre);
}

console.log('Empieza el proceso');
main();
console.log('esto sale de 2do');

