// promise 

function go (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shop = true;
            if(shop){
                resolve("i am going to the shop")
            }else{
                reject("i forgot to going to the shop")
            }    
        }, 5000);
    })
}
function buy(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product =true;
            if(product){
                resolve("i am buy the product")
            }else{
                reject("not buy the product")
            }    
        }, 2000);
    })
}
function change (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const get = false;
            if(get){
            resolve("collected the changes")
            }else{
                reject("forgot to collect the changes")
            }
        }, 2000);
    })
}
function home(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const back = true;
            if(back){
            resolve("back to home")
            }else{
                reject("back to ground")
            }
        }, 5000);
    })
}

// go()
// .catch(hi => {console.log(hi); return buy()})
// .catch(hi => {console.log(hi); return change()})
// .then(hi => {console.log(hi); return home()})
// .then(hi => {console.log(hi)})

async function box() {
    try {
    const a = await go();
    console.log(a);
    const b = await buy();
    console.log(b);
    const c = await change();
    console.log(c);
    const d = await home();
    console.log(d);  
    }catch(er){
     console.log(er);
     
    }

}
box();