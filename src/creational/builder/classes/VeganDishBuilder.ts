import { MealBuilderInterface } from "../interfaces/MealBuilderInterface";
import { MealsBox, Bean, Rice, Beverage, Dessert } from "./index";

export class VeganDishBuilder implements MealBuilderInterface {
  private _meal = new MealsBox();

  makeMeal(): this {
    const bean = new Bean("Feijão Preto", 5);
    const rice = new Rice("Arroz integral", 10);

    this._meal.add(bean, rice);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert("Palha italiana de amendoim", 8.35);

    this._meal.add(dessert);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage("Suco de Melancia", 5.5);

    this._meal.add(beverage);

    return this;
  }

  reset(): void {
    this._meal = new MealsBox();
  }

  getMeal(): MealsBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
