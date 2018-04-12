const request = require('request');
const argv = require('yargs').argv;

const address = argv.address;


const geocode = require('./geocode');
const weather = require('./weather');
const pretty = require('./beautiful-printer');

geocode.geocodeAddress(address,(error, results) =>{
    if(error){
        console.log(error);
    }
    else {
        //console.log(JSON.stringify(results, undefined, 2));
        pretty.prettyPrintLocation(results.formatted_address,results.lat,results.lng);
        weather.getWeather(results.lat, results.lng, (error, climate)=>{
            if(error){
                console.log(error);
            }
            else{
                pretty.prettyPrintWeather(climate.status, climate.actual, climate.temperature);
            }
        });
    }
});