const accountId = 14453
let accountEmail = "jaynilpatil2007@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2
accountEmail = "google.com"
accountPassword = "23323"
accountCity = "Delhi"

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/


console.table({ accountId, accountEmail, accountPassword, accountCity, accountState });