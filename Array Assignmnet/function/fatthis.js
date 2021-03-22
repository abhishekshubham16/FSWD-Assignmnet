

/*   let add = () => {
      console.log("Hello");
    }
  add() */

/*   var person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName(){
        return this.firstName + " " + this.lastName
    }
    
  };

  console.log(person.fullName()); */

  var person = {
    firstName: "Abhishek",
    lastName : "Kumar",
    id     : 5566,
    fullName: () => this.firstName + " "+ this.lastName
    
  };

console.log(person.fullName())