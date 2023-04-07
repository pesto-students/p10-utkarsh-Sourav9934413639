function add(...args){
    let sum=0;
    for(let i=0;i<args.length;i++)
    {
        sum+=args[i];
    }
    return sum;
}

function memoize(fn){
    const cache={};
    return function(...args){
    const key=args;
    if(cache[key])
    {
        console.log(cache);
        return cache[key];
    }
    else{
        cache[key]=fn(...args);
        console.log(cache);
        return cache[key];
    }
}
}
console.time();
const result=memoize(add);
console.log(result(100,200));
console.timeEnd();

console.time();
console.log(result(100,200,250,700));
console.timeEnd();

console.time();
console.log(result(10));
console.timeEnd();

// Using memoize function, we are storing the value of computed function in cache object as key-value pairs so that each time when we compute that function with the same set of arguments, we just call that property from the object instead of computing it again. This helps in fast and efficient working of computer.