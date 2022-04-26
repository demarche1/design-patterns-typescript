import { User } from "../interfaces/User";

export class MyDatabaseClassic {
  private static _instance?: MyDatabaseClassic;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (!MyDatabaseClassic._instance) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  add(user: User): User {
    const addedUserIndex = this.users.push(user);

    return this.users[addedUserIndex - 1];
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }

  remove(index: number): User {
    return this.users.splice(index, 1)[0];
  }
}
