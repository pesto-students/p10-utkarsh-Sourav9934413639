function fib(n){
    return {
    [Symbol.iterator]() {
      let a= 0;
      let b=1;
      let count=1;
      console.log(a);
      return {
        next() {
        if(count<n)
        {
          let c=a+b;
          a=b;
          b=c;
          count++;
          return { done: false, value: a };
        }
        else{
            return {done:true};
        }
        }
      };
    }
  };
}
  
  for (let elements of fib(5)) {
    console.log(elements);
  }
  