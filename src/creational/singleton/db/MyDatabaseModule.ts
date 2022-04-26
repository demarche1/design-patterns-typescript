import { User } from "../interfaces/User";

const users: User[] = [];

export const MyDatabaseModule = {
  add(user: User): User {
    const addedUserIndex = users.push(user);

    return users[addedUserIndex - 1];
  },

  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },

  remove(index: number): User {
    return users.splice(index, 1)[0];
  },
};
