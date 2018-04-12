const asyncAdd = (a,b,callback) =>{
    if(!isNaN(a) && !isNaN(b)){
        setTimeout(()=>{
            callback(a+b);
        },2300);
    }
    else{
        callback(undefined,'Error');
    }
}

asyncAdd(5,'a',(value,err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(value);
    }
})