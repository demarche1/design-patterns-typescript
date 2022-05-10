import { Vehicle } from "./Vehicle-Interface";

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`O ${this.name} está sendo utilizado por ${customerName}`);
  }
  stop(): void {
    console.log(`O ${this.name} está parando`);
  }
}
