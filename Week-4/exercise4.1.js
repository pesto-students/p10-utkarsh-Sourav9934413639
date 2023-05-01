function customPromise(executorFunction){
    let status="Pending";
    let value=null;
    let handlers=[];
    let catchers=[];

    function resolve(result){
        if(!status=="Pending") return;
        status="fullfilled";
        value=result;
        handlers.forEach((h)=>h(value));
    }
    function reject(error){
        if(!status=="Pending") return;
        status="rejected";
        value=error;
        catchers.forEach((c)=>c(value));
    }

    this.then=function(passedCall){
        if(status=="fullfilled")
        {
            passedCall(value);
        }
        else{
            handlers.push(passedCall);
        }
    }

    this.catch=function(failedCall){
        if(status=="rejected")
        {
            failedCall(value);
        }
        else{
            catchers.push(failedCall);
        }
    }
    executorFunction(resolve,reject);
}

function getNumber(resolve,reject){
    let num=(Math.round(Math.random()*100));
    if(num%5!=0)
    {
        resolve(`SUCCESS: The given number ${num} is not divisible by 5`);
    }
    else{
        reject(`FAILED: The given number ${num} is divisible by 5`);
    }
}

let prom=new customPromise(getNumber);
prom.then((result)=>{
    console.log(result);
})
prom.catch((err)=>{
    console.log(err);
})