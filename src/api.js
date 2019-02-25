const { getToken,uploadFile,getDocument,webServicePi } = require('./functions/peticiones.js');


    getDocument().
    then( (resolve, reject)=>{
    return getToken()
    }) 
    .then( (resolve, reject)=>{        
        return uploadFile(resolve);
    })
    .then( (resolve, reject)=>{
       return webServicePi(resolve);
    })
    .then((resolve, reject)=>{
    console.log('codigo',resolve);
    })

    

    //code 1033 description El comprobante fue registrado previamente con otros datos.
    //code 0110 description No se pudo obtener la información del tipo de usuario.
    //code 1049 description ID - Serie y Número del archivo no coincide con el consignado en el contenido del XML
    //code 0 description 76171c7d-abea-4bbe-a6fc-e224ab3e2982