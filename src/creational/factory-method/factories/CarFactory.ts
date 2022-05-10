import { Vehicle } from "../vehicles/Vehicle-Interface";
import { VehicleFactory } from "./VehicleFactory";
import { Car } from "../vehicles/Car";

export class CarFactory extends VehicleFactory {
  createVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
