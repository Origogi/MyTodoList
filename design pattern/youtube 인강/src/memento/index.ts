import {
  BlindMan,
  Action,
  Memento,
  ActionTuple,
  allActions,
} from "./blind-man";

let memento: Memento | undefined;
console.log("Hello Memento");

const blindMan = new BlindMan(0, 0, 10, 10);
let minDistance = Number.MAX_SAFE_INTEGER;

while (true) {
  const action: Action = allActions[Math.floor(Math.random() * 4)];
  const distance = blindMan.walk(action);

  console.log(` distance: ${distance}`);

  if (distance === 0.0) {
    console.log("도착");
    break;
  }

  if (minDistance > distance) {
    minDistance = distance;
    memento = blindMan.createMemento();
  } else {
    if (memento !== undefined) {
      console.log("restore");
      blindMan.restoreMemento(memento);
    }
  }
}

console.log(blindMan.resultPath());