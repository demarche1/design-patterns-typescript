import { User } from "../interfaces/User";

export const myDatabaseClosure = (() => {
  const users: User[] = [];

  return {
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
})();
