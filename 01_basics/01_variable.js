const accountID = 12345
let accountEmail = "dbrpn07@gmail.com" //You can use Scope (Lexial scope, Block Scope ,functional scope)
var accountPassword = "14454" //You cannot use Scope using Var

/*Prefer not to use Var because of issue in block scope and functional scope*/

accountCity = "Jaipur"
let accountState

//accountID = 2; Not allowed to rewrite a constant
accountEmail = "dbrpn06@gmail.com"
console.log(accountID)
console.table([accountEmail,accountID,accountPassword,accountCity,accountState])
