console.log('Hola mundo!');

// setInterval(function(){
//     console.log('sigo activo');
// }, 1000);

/* El problema de los monohilos es que al producirse 
un error el código falla y deja de ejecutarse
*/
let i = 0;
setInterval(function(){
    console.log(i);
    i++;
    // if (i === 5){
    //     var a = 3 + z;
    // }
},1000);

console.log('aquí sigo');