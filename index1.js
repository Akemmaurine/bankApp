const prompt = require('prompt-sync')({ sigint: true });

function userinput(desc) {
        let userData = prompt(desc);
        return userData;
}
function username() {
        let username = userinput("enter username...")
}
function guessdateofbirth(dateOfbirth) {
        let setDateOfBirth = new Date(dateOfbirth)
        setDateOfBirth.setFullYear(setDateOfBirth.getFullYear() + 20);

        let currentDate = new Date()
        let currentAge = currentDate.getFullYear() + 20 - currentDate.getFullYear()
        console.log(" you will be " + currentAge + " years old on " + setDateOfBirth)








}
username()
let getDateOfBirth = userinput("Enter date of birth YYYY-MM-DD....")
console.log(guessdateofbirth(getDateOfBirth))