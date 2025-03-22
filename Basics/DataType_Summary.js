// Primitive
/*
  7 types: string number, boolean, null, undefined, symbol, bigint
  This is all are call be value 
*/

const age = 23
const str = "fds"
let s;

let bigNum = 325447326483745813n

let Q1 = Symbol('6273')
let Q2 = Symbol('6273')

// console.log(Q1 === Q2)

//Reference or Non-primitive
/*
  Objects, Functions, Array
*/

const arr = ["age", "score", "hits"]

let myObject = {
    name : "Rohan",
    age : 22
}

const myFun = function(){
    console.log("hello world")
}
console.log(myFun)
