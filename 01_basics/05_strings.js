const name = "Abir"
const repocount = "50"

// console.log(name + repocount + "Value");

/*Uses of String Interpolation or string Template Literals*/

console.log(`Hello my Name is ${name} and my repocount is ${repocount}`);

const gameName = new String('Debarpan')
console.log(gameName[0]); //Indexing of Strings
console.log(gameName.length) //Length Of Strings
console.log(gameName.__proto__) //Empty Onject Return Case
console.log(gameName.toUpperCase()) //Uppercase the Strings

console.log(gameName.charAt(2)); // character at Position 2
console.log(gameName.indexOf('n')); //Index of any character in String

const newString = gameName.substring(0,4)
console.log(newString); //Use of Substrings

const anotherString = gameName.slice(-8,4)
console.log(anotherString); // -ve Value = Length - 8 = 0 = Index

const newStringOne = "   Abir   "
console.log(newStringOne)
console.log(newStringOne.trim()) //Trim Unnecessary Spaces

const url = "https://abir.com/abir%20deb"
console.log(url.replace('%20','-')) //replace ceratin element with another element in the string

console.log(url.includes('abir')) // is the word includes in string or not ?
console.log(url.includes('Debarpan'))


//String Split: split(separator,limit) / split(separator)

const myname = "De-Bar-Pan-Deb"
console.log(myname.split('-')); //split the string on the basis of '-'
