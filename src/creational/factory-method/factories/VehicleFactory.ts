import { Vehicle } from "../vehicles/Vehicle-Interface";

export abstract class VehicleFactory {
  // Facthory Method
  abstract createVehicle(vehicleName: string): Vehicle;

  showVehicleCode(): void {
    console.log(Math.floor(Math.random() * 1000));
  }

  pickUp(customerName: string, vahicleName: string): Vehicle {
    const vehicle = this.createVehicle(vahicleName);
    console.log(`${customerName} ===> ${vahicleName}`);
    return vehicle;
  }
}
