const prompt = require('prompt-sync')({ sigint: true });
function userInput(desc){
    let userData= prompt(desc);
    return userData;
}

function userRegistration(){
    let username = userInput("create username?");
    let checkUsernamelength = username.length;
    let checkSpecialchar = username.search("@");
if (checkUsernamelength <10 || checkUsernamelength >10 )  {
    console.log("username must be 10 character long")   
}
else if (checkSpecialchar==0){
    console.log("username must have @ symbol")
}
else if (checkUsernamelength===10 && checkSpecialchar >0){
    let password = userInput("create password?");
    let checkPasswordlength = password.length;
    let checkPasswordspecialchar = password.search("@")
    if (checkPasswordlength <10 || checkPasswordlength >10) {
        console.log("password must be 10 character long")
    }
    else if(checkPasswordspecialchar==0){
        console.log("password must have an @ symbol")
    }
    else if(checkUsernamelength===10 && checkSpecialchar >0 && checkPasswordlength===10 && checkPasswordspecialchar >0 ){
        console.log("your username is"+ username + "your password is" + password)
    }
}
else{
    console.log("error:try again")

}

}

userRegistration()
