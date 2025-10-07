// settimeout 

function box1 (){
    setTimeout(() => {
        console.log("hello java");
        
    },5000);
}
function box2 (){
    setTimeout(() => {
        console.log("hello js");
        
    }, 2000);
}
box1();
box2();