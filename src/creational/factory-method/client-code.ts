import { CarFactory } from "./factories/CarFactory";
import { randomVehicleAlgorithm } from "./main/randomVehicleAlgorithm";
import { randomNumber } from "./utils/randomNumber";

const custumerNames = ["Bianca", "Raquel", "Juliana", "Pedro"];

const carFactory = new CarFactory();

for (let i = 0; i <= 10; i++) {
  const vehicle = randomVehicleAlgorithm();
  const name = custumerNames[randomNumber(custumerNames.length)];

  vehicle.pickUp(name);
  vehicle.stop();

  console.log("------");
  const car = carFactory.pickUp(name, "Opala");
  car.stop();
  console.log("-----");
}
