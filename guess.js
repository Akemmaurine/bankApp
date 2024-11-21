const prompt = require('prompt-sync')({ sigint: true });
 // this is the guess number funtionality 
 function guess(luckyNumber) {
if( luckyNumber==="2025"){
    return true;}
}
// this function collects data from users
function userInput(desc){
    let userData= prompt(desc);
    return userData;
}
// stores the guess count values
let guessCount=0
//the while loop to count the number of trials
while(guessCount<3){
    luckyNumber=userInput("enter lucky number?..")

if(guess(luckyNumber)!= true){
    console.log("try again")
    guessCount++;
}
else if(guess(luckyNumber)==true){
    console.log("congratulations")
    break;

}
}
