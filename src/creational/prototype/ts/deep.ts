import { Address } from "./classes/Address";
import { PrototypeDeepCopyExample } from "./classes/PrototypeDeepCopyExample";

const person = new PrototypeDeepCopyExample("Alessandro", 26);
const address = new Address("Av Brasil", 15);
person.addAddress(address);

const person2 = person.clone();

person.adresses[0].street = "Bla bla";

console.log(person);
console.log(person2.name);
console.log(person2.adresses);
