const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// });

// exec('node console.js', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// });

let proceso = spawn('ls',['-la']);
proceso.stdout.on('data', function(dato) {
    console.log(dato.toString());
}); 
proceso.on('exit', () => {
    console.log('El proceso terminó');
});