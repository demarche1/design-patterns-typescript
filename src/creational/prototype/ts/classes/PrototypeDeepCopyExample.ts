import { Prototype } from "../interfaces/Prototype";
import { Address } from "./Address";

export class PrototypeDeepCopyExample implements Prototype {
  public adresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): PrototypeDeepCopyExample {
    const newObj = new PrototypeDeepCopyExample(this.name, this.age);

    newObj.adresses = this.adresses.map((address) => address.clone());

    return newObj;
  }

  addAddress(address: Address): void {
    this.adresses.push(address);
  }
}
