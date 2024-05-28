var accountName = "Mehfooz Abbas Hasni"
const accountId = 123456
let accountEmail = "Mehfoozabbas@gmail.com"

accountCity = "Mumbai";
let accountState;  // This will give result Undefined.

accountName = "Syed Abbas"
// accountId = 22334455        // This will throw error because we can't change Const.
accountEmail ="Abbas@yahoo.com"
accountCity = "Delhi"


console.table([accountName,accountId,accountEmail,accountCity,accountState]);

/*
Prefer not to use Var because of issue in block scope & functional scope.
*/
