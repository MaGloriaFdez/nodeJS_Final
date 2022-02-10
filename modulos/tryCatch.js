function serompe(){
    return 3 + z;
};

function seRompeAsincrona(cb){
    setTimeout(function(){
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error en la función asíncrona');
            cb(error);
        }
    });
};

try {
    //serompe();
    seRompeAsincrona(function (error) {
        console.log('cb error');
        console.log(error.message);
    });
} catch (err) {
    console.error('-----> Ha ocurrido un error: ', err.message);
}

console.log('esto está al final y se ejecuta');
