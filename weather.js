const request = require('request');



// let getWeather = (lat, lng, callback) =>{

// request({
//     uri:`https://api.darksky.net/forecast/bcb4662e52958517677269bf4c4e0f05/${lat},${lng}`,
//     json:true
// },(error,response,body)=>{
//    if(error){
//        callback('Could not connect to Dark Sky Servers',undefined);
//    }
//    else if(body.code=='400'){
//        callback('Given location is invalid',undefined);
//    }
//    else{
//        results = {
//            status:body.currently.summary,
//            actual:body.currently.temperature,
//            temperature:body.currently.apparentTemperature
//        }
//        callback(undefined,results);
//    }
// });

// }

// PROMISE IMPLEMENTATION of WEATHER FUNCTION

let getWeather = (lat,lng)=>{
    return new Promise((resolve, reject)=>{
        request({
                uri:`https://api.darksky.net/forecast/bcb4662e52958517677269bf4c4e0f05/${lat},${lng}`,
                json:true
            }, (error,response,body)=>{
               if(error){
                   reject('Could not connect to Dark Sky Servers');
               }
               else if(body.code=='400'){
                   reject('Given location is invalid');
               }
               else{
                   results = {
                       status:body.currently.summary,
                       actual:body.currently.temperature,
                       temperature:body.currently.apparentTemperature
                   }
                   resolve(results);
               }
            });
    });
}


module.exports={
    getWeather
}