function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  class ModernPerson {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
      getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  const ageDifference = (personA, personB) => {
    return Math.abs(personA.age - personB.age);
  };
  const person1 = new Person('John', 'Doe', 30);
  const person2 = new ModernPerson('Jane', 'Smith', 28);
  console.log('Using Constructor Function:');
  console.log('Full Name:', person1.getFullName());
  console.log('Age Difference:', ageDifference(person1, person2));

  console.log('\nUsing Class Syntax:');
  console.log('Full Name:', person2.getFullName());
  console.log('Age Difference:', ageDifference(person2, person1));
  