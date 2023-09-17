import { Unit } from "./unit";

export class Folder extends Unit {
  private units: Array<Unit> = [];

  constructor(name: string) {
    super(name);
  }

  add(unit: Unit) {
    this.units.push(unit);
  }

  getSize(): number {
    return this.units.reduce((acc, item) => item.getSize() + acc, 0);
  }

  private createUnit(unit: Unit, dom: Element) {
    const domUnit = document.createElement("div");
    domUnit.classList.add("unit");

    domUnit.innerHTML = `<div>
        <span>${unit.getName()}</span>
        <span>${unit.getSize()}</span>
        </div>`;

    dom.append(domUnit);
    return domUnit;
  }

  list(dom: Element) {
      const domUnit = this.createUnit(this, dom);

      const bFolder = this instanceof Folder;

      if (bFolder) {
          domUnit.classList.add("folder");
          this.units.forEach((unit) => {
             if (unit instanceof Folder) {
                 unit.list(domUnit);
             } else {
                 this.createUnit(unit, domUnit);
             }
          });

      }


  }
}
