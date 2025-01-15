let score = "33"
console.log(typeof score);
console.log(typeof(score))
let valueinNumber = Number(score)
console.log(typeof valueinNumber)
console.log(valueinNumber)

// "33"=>string
// "33abc" => NaN
// "true" => 1 ; "false" => 0

let isloggedin = ""
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin);

// 1 => true ; 0 => false
// "" => false
// "Abir" => true

let someNumber = 33
let stringnumber = String(someNumber)
console.log(stringnumber);
console.log(typeof stringnumber) //String

/****Operations****/
 let value = 5
 let negvalue = -value
 console.log(negvalue)
//  console.log(2+2)
//  console.log(5-2)
//  console.log(5*2)
//  console.log(25/2)
//  console.log(2**3)
//  console.log(12%5)

let str1  = "Hello"
let str2  = "Abir"
let str3 = str1 + str2
console.log(str3)
console.log("1" + 2) // 12
console.log(1 + "2") // 12
console.log("1"+2+2) // 122
console.log(1+2+"2") // 32

// console.log(+true) ans => 1
// console.log(+"")   ans => 0

let gamecounter = 100
gamecounter++ ;
console.log(gamecounter)
++gamecounter
console.log(gamecounter)
