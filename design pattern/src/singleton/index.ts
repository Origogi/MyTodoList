import { King } from "./king";

console.log('singleton');
const king1 = King.getInstance();
const king2 = King.getInstance();

if (king1 === king2) {
    console.log('king1 and king2 are the same instance');
}