//Call,apply and bind.
let employee1={
    name:"Sourav",
    age:28,
    role:"Web developer",
    qualification:"B.E",
    fun1:function(){
        console.log(this.name);
    }
}
let employee2={
    name:"Sanjana",
    age:20,
    role:"Freelancer",
    qualification:"12th pass"
}
let employee3={
    name:"Abhijeet",
    age:30,
    role:"Medical Officer",
    qualification:"M.B.B.S"
}

let fn1=function(){
    console.log(`I am ${this.name} and I am ${this.role}`);
}

fn1.call(employee1);
let store=fn1.bind(employee3);
let fn2=function(hobby1,hobby2){
    console.log(`Apart from my role as ${this.role}, I am also interested in ${hobby1} and ${hobby2}`);
}
fn2.apply(employee2,["singing","dancing"]);
store();