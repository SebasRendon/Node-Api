var request = require("request");
var path = require('path');
require('../config/config');

const getDocument =()=>{
  let promiseDocument = new Promise( (resolve, reject) =>{
    process.env.ARCHIVO = '20514584789-01-FC01-0060.csv';
    resolve("ok");
  });
  return promiseDocument;
}


const getToken = () => {
  //declaracion de la promesa.
  let promiseToken = new Promise( (resolve, reject) => {
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
  return promiseToken;
};

const uploadFile = (token)=>{
  let promiseUpload = new Promise( (resolve, reject)=>{     
    var fs = require("fs");

var options = {
  method: 'POST',
  url: 'https://ose-gw1.efact.pe:443/api-efact-ose/v1/document',
  headers: 
   { 
     'Authorization': `bearer ${token}`,
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData: 
   { file: 
      { value: fs.createReadStream(`${path.resolve(__dirname, '../uploads')}/${process.env.ARCHIVO}`),
        options: 
         { filename: `${process.env.ARCHIVO}`,
           contentType: null } 
          } 
        } 
      };

request(options, function (error, response, body) {
  if (error) throw new Error(reject(error));
resolve(body);  
});

});
return promiseUpload;
};

const webServicePi = (data)=>{
  let webSerice = new Promise ( (resolve, request)=>
  {
    const code = JSON.parse(data);
    resolve(code.code);
  });
return webSerice;
  }

module.exports= {
  getToken,
  uploadFile,
  getDocument,
  webServicePi
}