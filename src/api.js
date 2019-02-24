const { asincronia } = require('./functions/peticiones.js');

asincronia()
.then( respuesta => console.log(respuesta))
.catch( error => console.error(error));