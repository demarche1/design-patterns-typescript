function Person(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

function Person2(name, lastName, age) {
  Person.call(this, name, lastName, age);

  this.helloFromPerson2 = "Hello from Person2";
}

const personPrototype = {
  name: "Alessandro",
  lastName: "Silva",
  age: 26,

  getFullName() {
    return `${this.name} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.contructor = Person;

Person2.prototype = Object.create(Person.prototype);
Person2.prototype.contructor = Person2;

const person = new Person("Yasmim", "Lazarim", 24);
console.log(person);
console.log(person.getFullName());

const person2 = new Person2("João", "Lazarim", 15);
console.log(person2);
console.log(person2.getFullName());
