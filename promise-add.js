// let promise = new Promise((resolve, reject)=>{

// })

const asyncAdd = (a,b) =>{
    return new Promise((resolve,reject)=>{
        if (!isNaN(a) && !isNaN(b)){
            setTimeout(()=>{
                resolve(a+b);
            },2000);
        }
        else{
            setTimeout(()=>{
                reject('invalid type');

            },1400);
        }
    });
}




asyncAdd(4,1)
.then((sum)=>{
    console.log(`the sum is ${sum}`);
    return asyncAdd(13,sum);
})
.then((result)=>{
    if(result>20){
    console.log(`THe new sum is ${result}`);
    }
    else{
        console.log(`Not there yet`);
    }
})
.catch((message)=>{
    console.log(message);
})

const call = (string)=>{
    console.log(string);
}

for(let i=0;i<5;i++)
{
    setTimeout(() => {
        call('promising');
    }, 2000); 
}

// call('promising');