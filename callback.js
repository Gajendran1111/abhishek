// call back
function box1 (callback){
    setTimeout(() => {
        console.log("hello java");
        callback()
    },5000);
}
function box2 (callback){
    setTimeout(() => {
        console.log("hello js");
        callback()
    }, 2000);
}
// callbackhell
function box3 (callback){
    setTimeout(() => {
        console.log("hello api");
        
    }, 3000);
}
box1(()=>{
    box2(()=>{
        box3(()=>{})
    })
});