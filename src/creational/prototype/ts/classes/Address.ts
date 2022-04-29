import { Prototype } from "../interfaces/Prototype";

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}
