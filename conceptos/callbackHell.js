function hola(nombre, miCallback) {
    setTimeout( () => {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    },1000);
};

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('Bla bla bla..');
        callbackHablar();
    },1000);

}
// recursividad
function conversacion(nombre, veces, callbackConversacion){
    if (veces > 0){
        hablar(() => {
            conversacion(nombre, --veces, callbackConversacion);
        });
    }else{
        adios(nombre,callbackConversacion);
    }
};

function adios(nombre, otroCallback) {
    setTimeout( () => {
        console.log('Adios ' + nombre);
        otroCallback();
    },1000);
}; 


//console.log('Iniciando proceso....');
// hola('Gloria', function(nombre){
//     hablar(function(){
//         hablar(() => {
//             hablar(() => {
//                 adios(nombre, () => {
//                     console.log('Terminando proceso');
        
//                 });
//             });
//         });
//     });
// });

// con función recursiva
console.log('Iniciando proceso....');
hola('Gloria', (nombre) => {
    conversacion(nombre, 3, function () {
        console.log('Proceso terminado..');
    });
});
