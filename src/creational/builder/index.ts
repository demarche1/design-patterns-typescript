import { StandardDishBuilder, VeganDishBuilder } from "./classes";

const standardDishBuilder = new StandardDishBuilder();

standardDishBuilder.makeMeal().makeBeverage().makeDessert();

console.log(standardDishBuilder.getMeal());
console.log(standardDishBuilder.getPrice());
standardDishBuilder.reset();
console.log(standardDishBuilder);

const veganDishBuilder = new VeganDishBuilder();

veganDishBuilder.makeMeal().makeBeverage().makeDessert();

console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
veganDishBuilder.reset();
console.log(veganDishBuilder);
