import { Prototype } from "../interfaces/Prototype";
import { Address } from "./Address";

export class PrototypeShallowCopyExample implements Prototype {
  public adresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    return Object.create(this);
  }

  addAddress(address: Address): void {
    this.adresses.push(address);
  }
}
