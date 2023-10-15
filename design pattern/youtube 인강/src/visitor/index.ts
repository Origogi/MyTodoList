import { ItemList } from "./item-list";
import { Item } from "./item";
import { SumVisitor } from "./sum-visitor";
import { AverageVisitor } from "./average-visitor";

console.log("visitor pattern");

const list1 = new ItemList();

list1.add(new Item(100));
list1.add(new Item(200));
list1.add(new Item(300));

const list2 = new ItemList();
list2.add(new Item(400));
list2.add(new Item(500));
list1.add(list2);

const list3 = new ItemList();
list3.add(new Item(600));
list2.add(list3);

const sum = new SumVisitor();
list1.accept(sum);

console.log(sum.getSum());

const avg = new AverageVisitor();
list1.accept(avg);

console.log(avg.getValue());