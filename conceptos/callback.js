// function soyAsincrona(num,mseg){
//     setTimeout(() => {
//         console.log('Estoy siendo asíncrona ' + num)
//     },mseg)
// };
// console.log('Iniciando proceso....');
// soyAsincrona(1,1000);
// console.log('Terminando proceso....');
// soyAsincrona(2,10);

// function soyAsincrona(miCallback) {
//     setTimeout( () => {
//         console.log('Estoy siendo asíncrona');
//         miCallback();
//     },1000);
// };
// console.log('Iniciando proceso....');
// soyAsincrona(() => {
//     console.log('Terminando proceso....');
// });

function hola(nombre, miCallback) {
    setTimeout( () => {
        console.log('Hola ' + nombre);
        miCallback();
    },1000);
};

function adios(nombre, otroCallback) {
    setTimeout( () => {
        console.log('Adios ' + nombre);
        otroCallback();
    },1000);
}; 
console.log('Iniciando proceso....');
hola('Mary',() => {
    adios('Mary', () => {
        console.log('Terminando proceso....');
    });
});

