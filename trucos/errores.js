function asincrona(callback) {
    setTimeout(function() {
      try {
        let a = 3 + 5;
    //    let a = 3 + z;
          callback(null, a);
      } catch (error) {
          callback(error);
      }  
    }, 1000);
}

asincrona((err, dato) => {
    if (err){
        console.error('Hay un error');    
        console.error(err.message);
        return false;
    }
    console.log('Todo ha ido bien, sin error');
    console.log('Dato: ' + dato);
});
