function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
  }
   PersonConstructor.prototype.getInfo = function () {
    return `Name: ${this.name}, Age: ${this.age}`;
  };
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
      getInfo() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  const personLiteral = {
    name: "John Doe",
    age: 30,
    getInfo: () => {
      return `Name: ${personLiteral.name}, Age: ${personLiteral.age}`;
    },
  };
  const person1 = new PersonConstructor("Alice Smith", 25);
  const person2 = new PersonClass("Bob Johnson", 35);
  const person3 = { ...personLiteral };
  PersonConstructor.prototype.sayHello = () => {
    return "Hello, I am an arrow function!";
  };
  console.log(person1.getInfo()); 
  console.log(person2.getInfo()); 
  console.log(person3.getInfo()); 
  
  console.log(person1.sayHello()); 
  