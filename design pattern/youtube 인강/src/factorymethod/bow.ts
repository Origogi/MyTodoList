import { Item } from "./item";

export class Bow implements Item {
    use(): string {
        return "활을 사용하였다. 적에게 40의 데미지를 주었다.";
    }

}