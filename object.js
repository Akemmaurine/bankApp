const prompt = require("prompt-sync")({ sigint: true });

class DateGuess {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  setName(newName) {
    try {
      return (this._name = newName);
    } catch (err) {
      console.log(err);
    }
  }
  getName() {
    return this._name;
  }
  setAge(newAge) {
    return (this._age = new Date(newAge));
  }

  getAge() {
    return this._age;
  }

  myCurentAge() {
    try {
      const d = new Date();
      const todayDate = new Date();
      const myDateOfBirth = Number(this.getAge().getFullYear());
      const futureDateOfBirth = todayDate.getFullYear() - myDateOfBirth + 20;
      const futureYear = todayDate.getFullYear() + 20;
      console.log(
        "Hello " +
          this.getName() +
          " You will be " +
          futureDateOfBirth +
          " Year Old " +
          " in " +
          new Date(futureYear,this.getAge().getMonth(), this.getAge().getDay())
      );
    } catch (err) {
      console.log(err);
    }
  }

  getUserInput(desc) {
    return prompt(desc);
  }
}

const user1 = new DateGuess();
console.log("YYYY-M-D");
user1.setName(user1.getUserInput("Enter you name?.... "));
user1.setAge(user1.getUserInput("Enter Date Of Birth?... "));
user1.myCurentAge();

