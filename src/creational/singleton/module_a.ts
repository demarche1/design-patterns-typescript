/*
######## CLASSIC SINGLETON BELOW #######

import { MyDatabaseClassic } from "./db/MyDatabaseClassic";
const db = MyDatabaseClassic.instance;

console.log(db.add({ age: 26, name: "Alessandro" }));
console.log(db.add({ age: 32, name: "Clebão Big Boy" }));
console.log(db.add({ age: 24, name: "Yasmim" }));
console.log("___________RODEI O SHOW______________");
db.show();
console.log("___________SHOW PAROU DE RODAR______________");
console.log(db.remove(1));

export { db };

*/

/* ######## JS MODULES SINGLETON BELOW ####### 
import { MyDatabaseModule } from "./db/MyDatabaseModule";

const db = MyDatabaseModule;

console.log(db.add({ age: 26, name: "Alessandro" }));
console.log(db.add({ age: 32, name: "Clebão Big Boy" }));
console.log(db.add({ age: 24, name: "Yasmim" }));
console.log("___________RODEI O SHOW______________");
db.show();
console.log("___________SHOW PAROU DE RODAR______________");
console.log(db.remove(1));

export { db };

*/

/* ######## SINGLETON WITH CLOSURES BELOW ####### */

import { MyDatabaseClosure } from "./db/myDatabaseFunction";

const db = MyDatabaseClosure;

console.log(db.add({ age: 26, name: "Alessandro" }));
console.log(db.add({ age: 32, name: "Clebão Big Boy" }));
console.log(db.add({ age: 24, name: "Yasmim" }));
console.log("___________RODEI O SHOW______________");
db.show();
console.log("___________SHOW PAROU DE RODAR______________");
console.log(db.remove(1));

export { db };
