// with not arguments no return value
let display = ()=>{
    console.log(`"Good Morning, Today is Tuesday"`);
}
display();

//with 3 arguments and no return value

let multiply = (arg1, arg2, arg3 = 1) =>{
    console.log("After multiplication we get", arg1*arg2*arg3);
}
multiply(5, 5, 2);
multiply(10, 4);

//with 5 arguments and return value

let addNum = (arg1, arg2, arg3, arg4, arg5) => {
    return arg1+arg2+arg3+arg4+arg5;
}

let Number = addNum(100, 100, 200, 349, 756);
console.log("After Addition: ", Number);

let str = addNum("I am", " learning", " ES6", " features", " in depth");
console.log("After Addition: ", str);