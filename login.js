const prompt = require('prompt-sync')({ sigint: true });
const data = {};


class Auth{
    constructor(firstName, lastName, userName, passWord){
        this._firstName = firstName;
        this._lastName = lastName;
        this._userName = userName;
        this._passWord = passWord;
        
    }
setFirstName(newFirstName){
    try{
        this._firstName = newFirstName
    }catch(err){
        console.log(err)
    }
}
getFirstName(){
    try{
        return this._firstName = data.firstName 
    }catch(err){
        console.log(err)
    }
}
setLastName(newLastName){
    try{
        this._lastName = newLastName
    }catch(err){
        console.log(err)
    }
} 
getLastName(){
    try{
        return this._lastName = data.lastName
    }catch(err){
        console.log(err)
    }
}
setUserName(newUserName){
    try{
        this._userName = newUserName
    }catch(err){
        console.log(err)
    }
}
getUserName(){
    try{
        return this._userName = data.userName
    }catch(err){
        console.log(err)
    }
}
setPassword(newPassWord){
    try{
        this._passWord = newPassWord
    }catch(err){
        console.log(err)
    }
}getPassWord(){
    try{
        return this._passWord = data.passWord
    }catch(err){
        console.log(err)
    }
}

userRegistration(){
    try{
       //let validatedFirstName = this.setFirstName(document.forms["forminput"]["firstNameId"].value)
       // localStorage.setItem("firstName", this.getFirstName())
        
       //let validatedLastName = this.setLastName( document.forms["forminput"]["lastNameId"].value) 
       // localStorage.setItem("lastName", this.getLastName())

      // let validatedUserName = this.setUserName(document.forms["forminput"]["userNameId"].value) 
      //  localStorage.setItem("userName", this.getUserName())

       //let validatedPassWord = this.setPassword(document.forms["forminput"]["passWordId"].value)
       // localStorage.setItem("passWord", this.getPassWord())
       console.log("USER REGISTRATION")
      data.firstName = this.setFirstName(prompt("enter firstname..."))
      data.lastName = this.setPassword(prompt("enter lastname..."))
      data.userName = this.setUserName(prompt("enter username..."))
      data.passWord = this.setPassword(prompt("enter password..."))

        if(data.firstName === this.getFirstName() && data.lastName === this.getLastName()
        && data.userName === this.getUserName() && data.passWord === this.getPassWord() ){
            console.log("account created successfully")
        }
        else{
            console.log("Account not created")
        }
    }catch(err){
        console.log(err)
    }
}
userLogin(){
    try{
        let userNameValue = this.setUserName(prompt("enter username..."));
        let passWordValue = this.setLastName(prompt("enter password..."));
        if(userNameValue === this.getUserName() && passWordValue === this.getPassWord()){
            console.log("login succesfull")
        }else{
            console.log("invalid user")
        } 
    }catch(err){
        console.log(err)
    }
    
}

  
}

const user1 = new Auth();
user1.userRegistration();
user1.userLogin();


 