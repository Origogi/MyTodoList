import { Item } from "./item";

export class Sword implements Item {
    use() {
        return '칼을 사용하였다. 적에게 10의 데미지를 주었다.';
    }
}