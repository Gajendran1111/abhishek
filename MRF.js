// map 
// filter
// reduce 

// variable name .map((value,index,acctualarray)=>)

    let a = [10,20,30,40,50]
    let a1 = a.map((val,ind,acc)=>acc *5)
    console.log(a1);

    // variable name.filter((value,index,acctualarray)=>)

    let b = [112,4,53,78,96,4,2,456,7,85,249,3,44,1,44,86,3,459,7896,2,10,26]
    let b1 = b.filter((x,y,z)=>y<=10)
    console.log(b1);

    // reduce 
    // syntax 
    
    // variable name.reduce((accumulator,acctualarray)=>)
    
    let c = [10,20,30,40,50,]
    let c1 = c.reduce((t,y)=>t+y)
    console.log(c1);

