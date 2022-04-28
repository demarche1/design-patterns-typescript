import { MealCompositeInterface } from "../interfaces/MealCompositeInterface";

export class MealsBox implements MealCompositeInterface {
  private readonly _childrens: MealCompositeInterface[] = [];

  add(...meals: MealCompositeInterface[]): void {
    meals.forEach((meal) => this._childrens.push(meal));
  }

  getPrice(): number {
    return this._childrens.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }
}
