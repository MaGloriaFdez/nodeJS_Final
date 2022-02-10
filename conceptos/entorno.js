/*
las variables de emtorno se definen fuera, 
en este caso en el terminal ejecuto así:
NOMBRE=Mary node entorno.js
NOMBRE=Mary WEB=www.web.com

*/

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'no tengo web';
console.log('Hola ' + nombre);
console.log(web);
console.log('nodemon');

// nodemon se instala con sudo npm install -g --force nodemon
// pm2 se instala con sudo npm install -g --force pm2
// pm2 se usa para producción
