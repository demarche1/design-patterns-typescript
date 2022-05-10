import { BicycleFactory } from "../factories/BicycleFactory";
import { CarFactory } from "../factories/CarFactory";
import { randomNumber } from "../utils/randomNumber";
import { Vehicle } from "../vehicles/Vehicle-Interface";

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const fusca = carFactory.createVehicle("Fusca");
  const palio = carFactory.createVehicle("Palio");

  const bmx = bicycleFactory.createVehicle("BMX");
  const caloi = bicycleFactory.createVehicle("Caloi");

  const vehicles = [palio, fusca, bmx, caloi];

  return vehicles[randomNumber(vehicles.length)];
}
