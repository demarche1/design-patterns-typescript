import { Address } from "./classes/Address";
import { PrototypeShallowCopyExample } from "./classes/PrototypeShallowCopyExample";

const person = new PrototypeShallowCopyExample("Alessandro", 26);
const address = new Address("Av Brasil", 15);
person.addAddress(address);

person.adresses[0].number = 25;

const person2 = person.clone();
person2.name = "Yasmim";

console.log(person);
console.log(person2.adresses);
