const personPrototype = {
  name: "Alessandro",
  lastName: "Silva",
  age: 26,

  getFullName() {
    return `${this.name} ${this.lastName}`;
  },
};

const person = Object.create(personPrototype);

person.name = "Yasmim";
console.log(person);
console.log(person.name);
console.log(person.getFullName());
