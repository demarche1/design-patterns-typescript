import { Vehicle } from "../vehicles/Vehicle-Interface";
import { VehicleFactory } from "./VehicleFactory";
import { Bicycle } from "../vehicles/Bicycle";

export class BicycleFactory extends VehicleFactory {
  createVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
