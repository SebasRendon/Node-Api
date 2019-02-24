var request = require("request");

const asincronia = () => {
  //declaracion de la promesa.
  let promise = new Promise( (resolve, reject) => {
    var options = {
      method: 'POST',
       url: 'https://ose-gw1.efact.pe:443/api-efact-ose/oauth/token',
       qs: 
        { username: '20514584789',
          password: 'f6d750b5cddd1d48a2c9aa73601d20c7a2311bd85ecd3fea3f7230d9c2f1378a',
          grant_type: 'password' },  
       headers: 
        {  
         'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
         'Content-Type': 'application/x-www-form-urlencoded'     
         },    
       form: { undefined: undefined } };
     
     request(options, function (error, response, body) {
       if (error) throw new Error(reject(error));
       const token = JSON.parse(body);
       resolve(token.access_token);
      
     });
  });
  return promise;
};
//========== Consiguiendo la respuesta correcta ==========//


module.exports= {
  asincronia
}