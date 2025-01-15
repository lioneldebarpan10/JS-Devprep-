"use strict"; //treat all js codes as newer version 
//alert (3+3) , We are using nodejs ,not browser

let name = "Abir" //String 
let age = 19 /*number => upto 2^53 ,for very bignumber consider bigint*/

let isloggedin = true; // (0/1)
//Number => upto 2^53
//bigint for very big numbers
//strings =>""
// null => standalone Value
// undefined => no value is assigned
// symbol => uniqueness
// object => collection of Key-value Pairs

console.log(typeof age) //Number
console.log(typeof "Abir") //String
console.log(typeof null) //Object
console.log(typeof undefined) //Undefined

const ID = Symbol('123')
const anotherID = Symbol('123')
console.log(ID === anotherID);