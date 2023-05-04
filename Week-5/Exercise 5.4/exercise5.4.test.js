let obj=require("./exercise5.4.js");
test("add 4 and 5",()=>{
    expect(obj.addition(4,5)).toBe(9);
})
test("subtract 5 from 4",()=>{
    expect(obj.subtraction(4,5)).toBe(-1);
})
test("multiply 4 and 5",()=>{
    expect(obj.multiplication(4,5)).toBe(20);
})
test("add 90 and 120",()=>{
    expect(obj.addition(90,120)).toBe(200);
})
test("subtract 90 from 110",()=>{
    expect(obj.subtraction(110,90)).toBe(20);
})
test("multiply 30 and 40",()=>{
    expect(obj.multiplication(30,40)).toBe(1000);
})
