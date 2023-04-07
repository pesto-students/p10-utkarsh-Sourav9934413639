function createIncrement() {
    let count=0;
    function increment(){
        count++;
    }
    let message=`Count is ${count}`;
    function log(){
        console.log(message);
    }
    return [increment,log];
}

const [increment,log] =createIncrement(); 
increment();
increment();
increment();
log();

// Output is - Count is 0 . This is because both increment and log are seperate child methods inside createIncrement method.When increment methods are called, the value of count is updated in increment method only but in log method, it's value is supposed to be 0 which was taken initially from parent createIncrement function.