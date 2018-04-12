let prettyPrintLocation = (param1, param2, param3) =>{
    console.log("\n-----------\n");
    console.log(`Address is: \t ${param1}\n`);
    console.log(`Latitude is: \t ${param2}\n`);
    console.log(`Longitude is: \t ${param3}`);
    console.log("\n-----------\n");
}

module.exports={
    prettyPrintLocation
}