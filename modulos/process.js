// const p = require('process');

process.on('beforeExit', () =>{
    console.log('El proceso va a terminar');
});

process.on('exit', () =>{
    console.log('El proceso acabó');
});

process.on('uncaughtException', (err, org) => {
    console.error('Error no camputado');
    console.error(err.message);
    console.error(org);
})

funcionNoDefinida();
