const prompt = require("prompt-sync")({ sigint: true });
const data = {};

class Auth{
    constructor(userName, passWord){
        this._userName = userName;
        this._passWord = passWord;
    }
setUserName(newUserName){
    try{
        data.userName = newUserName;
        if(newUserName.search("@") < 0){
            console.log("incorrect username")
        }
        else{
            this._userName = newUserName
        }
        
    }catch(err){
        console.log(err)
    }
}
getUserName(){
    try{
        return this._userName = data.userName;
    }catch(err){
        console.log(err)
    }
}
setPassWord(newPassWord){
    try{
        data.passWord = newPassWord
        if(newPassWord.length < 10 && newPassWord.search("@") < 0){
            console.log("incorrect password")
        }
        else{
            this._passWord = newPassWord;
        }
    }catch(err){
        console.log(err)
    }
}
getPassWord(){
    try{
        return this._passWord = data.passWord
    }catch(err){
        console.log(err)
    }
}
userRegistration(){
    try{
        console.log("USER REGISTRATION")
    data.userName = this.setUserName(prompt("enter username..."))
    data.passWord = this.setPassWord(prompt("enter password..."))

    if(this.getUserName() === data.userName &&  this.getPassWord() === data.passWord){
        console.log("Account created")
    }else{
        console.log("Account not created")
    }
    }catch(err){
        console.log(err)
    }
}
userlogin(){
    try{
        console.log("LOGIN NOW")
        const userNameValue = this.setUserName(prompt("enter username..."))
        const PassWordValue = this.setPassWord(prompt("enter password..."))
        
        if(userNameValue === this.getUserName() && PassWordValue === this.getPassWord()){
            return true ;
        }else{
            return false ;
        }
    }catch(err){
        console.log(err)
    }
}

}

class Comment extends Auth{

    userComment(){
        try{
            const loginStatus = this.userlogin()
            if(loginStatus == true){
                console.log("login successful..")
                const userComment = prompt("type comment...");
                console.log(" your comment is "  + userComment);
            }else{
                console.log("not authorised to post a comment");
            }
        }catch(err){
            console.log(err)
        }
    }
}

user1 = new Comment();
user1.userRegistration();
user1.userComment();






