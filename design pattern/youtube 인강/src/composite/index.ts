import { Folder } from "./folder";
import { File } from "./file";

console.log("composite!!");

const root = new Folder("root");

root.add(new File("a.txt", 10));
root.add(new File("b.txt", 20));

const folder1 = new Folder("sub1");
folder1.add(new File("c.txt", 30));
folder1.add(new File("d.txt", 40));

const folder2 = new Folder("sub2");
folder2.add(new File("e.txt", 50));
folder2.add(new File("f.txt", 60));

folder1.add(folder2);
root.add(folder1);


const folder3 = new Folder("sub3");
folder3.add(new File("g.txt", 70));
folder3.add(new File("h.txt", 80));

root.add(folder3);

const dom = document.querySelector('#list');

if (dom) {
  root.list(dom);
}

