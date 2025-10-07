// array methods

// 1.push():  Adds a new element to the end of the array
// 2.pop(): Removes the last element from the array.
// 3.shift(): Removes the first element from the array.
// 4.unshift(): Adds a new element to the beginning of the array.
// 5.splice(): Adds or removes elements from the array.
//   splice(add , remove , replace)
// 6.sort(): Sorts the elements of the array.
// 7.reverse(): Reverses the order of elements in the array.

let arr = [10,20,30,40,50]
arr.push(60)
console.log(arr);

let rom =[10,20,30,40,50]
rom.pop()
console.log(rom);

let shi = [10,20,30,40,50]
shi.shift()
console.log(shi);

let un = [10,20,30,40,50]
un.unshift(9)
console.log(un);

// splice 
// syntax

// 0 it use to add a particular value  in the given index space & it move forword the alredy index value 
// 1 it use to add a particular value  in the given index space & it remove the alredy index value

// variable name.splive(index,splice,value)
let days = ["sunday","monday","tuesday","wednesday","friday","saturday"]
days.splice(4,1,"thuresday")
console.log(days);

let a = ["g","a","c","b","d","f","e"]
console.log(a.sort());

let rev = "hcraes"
console.log(rev.split("").reverse().join(""));
