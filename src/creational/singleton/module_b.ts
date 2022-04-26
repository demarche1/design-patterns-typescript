/*
######## CLASSIC SINGLETON BELOW #######

import { MyDatabaseClassic } from "./db/MyDatabaseClassic";
import { db as dbFromModuleA } from "./module_a";

const db = MyDatabaseClassic.instance;

console.log(db.add({ age: 26, name: "Alessandro" }));
console.log(db.add({ age: 32, name: "Clebão Big Boy" }));
console.log(db.add({ age: 24, name: "Yasmim" }));
console.log("___________RODEI O SHOW______________");
db.show();
console.log("___________SHOW PAROU DE RODAR______________");
console.log(db.remove(1));
console.log(db === dbFromModuleA); // true

*/

/* ######## JS MODULES SINGLETON BELOW ####### 
import { MyDatabaseModule } from "./db/MyDatabaseModule";
import { db as dbFromModuleA } from "./module_a";

const db = dbFromModuleA;

console.log(db.add({ age: 26, name: "Alessandro" }));
console.log(db.add({ age: 32, name: "Clebão Big Boy" }));
console.log(db.add({ age: 24, name: "Yasmim" }));
console.log("___________RODEI O SHOW______________");
db.show();
console.log("___________SHOW PAROU DE RODAR______________");
console.log(db.remove(1));
console.log(db === MyDatabaseModule); // true

*/

/* ######## SINGLETON WITH CLOSURES BELOW ####### */

import { myDatabaseClosure } from "./db/myDatabaseClosure";
import { db as dbFromModuleA } from "./module_a";

const db = dbFromModuleA;

console.log(db.add({ age: 26, name: "Alessandro" }));
console.log(db.add({ age: 32, name: "Clebão Big Boy" }));
console.log(db.add({ age: 24, name: "Yasmim" }));
console.log("___________RODEI O SHOW______________");
db.show();
console.log("___________SHOW PAROU DE RODAR______________");
console.log(db.remove(1));
console.log(db === myDatabaseClosure); // true
