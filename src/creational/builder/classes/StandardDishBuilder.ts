import { MealBuilderInterface } from "../interfaces/MealBuilderInterface";
import { Bean, Rice, Beverage, Dessert, MealsBox, Meat } from "./index";

export class StandardDishBuilder implements MealBuilderInterface {
  private _meal = new MealsBox();

  makeMeal(): this {
    const rice = new Rice("Arroz Branco", 5);
    const bean = new Bean("Feijão Carioca", 10);
    const meat = new Meat("Frango Empanado", 12);

    this._meal.add(rice, bean, meat);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert("Pudim de Leite", 8);

    this._meal.add(dessert);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage("Suco de Laranja", 6.5);

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
