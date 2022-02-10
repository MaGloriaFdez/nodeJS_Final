let suma = 0;
console.time('bucle');
for (let i=0; i< 1000000; i++){
    suma++;
}
console.timeEnd('bucle');
function asincrona(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
            res();
        });
    });
}
console.time('Asincrono');
asincrona().then(() => {console.timeEnd('Asincrono');});

