const request = require('request');



// let geocodeAddress = (address, callback) =>{

// request({
//     uri:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyBRS_lIQdiWv6CwwSFK4phcc7te76UqOd0
//     `,
//     json:true
// },(error,response,body)=>{
//    if(error){
//        callback('Could not connect to Google Servers',undefined);
//    }
//    else if(body.status==='ZERO_RESULTS'){
//        callback('No results were found',undefined);
//    }
//    else{
//        results = {
//            formatted_address:body.results[0].formatted_address,
//            lat: body.results[0].geometry.location.lat,
//            lng: body.results[0].geometry.location.lng
//        }
//        callback(undefined,results);
//    }
// });

// }


//PROMISE IMPLEMENTATION OF GEOCODE FUNCTION

let geocodeAddress = (address) =>{
    return new Promise((resolve, reject)=>{
        request({
            uri:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyBRS_lIQdiWv6CwwSFK4phcc7te76UqOd0
             `,
            json:true
        },(error,response,body)=>{
            if(error){
                 reject('Could not connect to Google Servers');
                 //reject();
            }
             else if(body.status==='ZERO_RESULTS'){
                 reject('No results were found');
                 //reject();
             }
            else{
                 results = {
                formatted_address:body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            }
       resolve(results);
   }
});

    });
}

module.exports={
    geocodeAddress
}