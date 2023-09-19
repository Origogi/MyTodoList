import { Item } from "./item";

export class Shield implements Item {
    use(): string {
        return '방패를 사용하였다. 적의 공격을 막았다.';
    }

}