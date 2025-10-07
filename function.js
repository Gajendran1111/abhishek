// function 

// syntax 
// function name  (){}


function mrg (){

var a =10;
var a =20;
console.log(a);

let b = 100;
 b = 50;
console.log(b);

const c = 40;
console.log(c);

}
mrg();

// function types 

// functon statement and declaration --> parameter / argument 
function fun (hi){
    console.log(hi)
}
fun("javascript");
// function expression or anonymous function 
let a =function hello (h){
    console.log(h)
}
a("java");

let b = function (ano){
    console.log(ano);
    
}
b("hello world");
// immedate invoke function expression 
(function (iife){
    console.log(iife);
    
})("function")
// arrow function 

// syntax 
// ()=>{}

    let d = (arrow)=>{console.log(arrow)}
    d("arrow function")