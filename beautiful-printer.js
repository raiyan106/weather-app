let prettyPrintLocation = (param1, param2, param3) =>{
    console.log("\n-----------\n");
    console.log(`Address is: \t ${param1}\n`);
    console.log(`Latitude is: \t ${param2}\n`);
    console.log(`Longitude is: \t ${param3}`);
    console.log("\n-----------\n");
}

let prettyPrintWeather = (param1, param2, param3) =>{
    console.log("\n-----------\n");
    console.log(`Status is: \t ${param1}\n`);
    console.log(`Actually it is: \t ${param2}\n`);
    console.log(`Feels like almost : \t ${param3}`);
    console.log("\n-----------\n");
}

module.exports={
    prettyPrintLocation,
    prettyPrintWeather
}