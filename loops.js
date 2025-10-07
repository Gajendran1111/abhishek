// loops types


// for loop 

// syntax 
// for(initilization;condition;itreation)

for (let a = 1;a<=5;a++){
    console.log("java");   
}

// while loop

// syntax

// initilization
// while(condition){
// code run 
// iteratiion
// }

let b = 1;
while(b>=5){
    console.log(b);
    b++
};
// do while 

// syntax 

// initilization 
// do{coderun
// iteration
// }while(condition)

let c = 1;
do{
    console.log(c);
    c++
}while(c<=6);
// for of 

let fruit = ["apple","orange","mango","banana","guava"]
for(sa of fruit){
    console.log(sa);   
}

// for in 

let obje = {
    name : "java",
    palce : "coding platform",
    version : 1995,
}
for (a in obje){  
console.log(a+" : "+obje[a]);
}
