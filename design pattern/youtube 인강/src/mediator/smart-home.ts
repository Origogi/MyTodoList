import { Mediator } from "./mediator";
import { Participant } from "./participant";
import { Door } from "./door";
import { HeatBoiler } from "./heat-boiler";
import { CoolAircorn } from "./cool-aircorn";
import { Window } from "./window";

export class SmartHome implements Mediator {
  private door = new Door(this);
  private heatBoiler = new HeatBoiler(this);
  private coolAircorn = new CoolAircorn(this);
  private window = new Window(this);

  participantChanged(participant: Participant): void {
      console.log("participantChanged");
      console.log(participant instanceof Door);

    if (participant instanceof Door) {
      if (!participant.isClosed) {
        this.heatBoiler.off();
        this.coolAircorn.off();
      }
    } else if (participant instanceof Window) {
      if (!participant.isClosed) {
        this.heatBoiler.off();
        this.coolAircorn.off();
      }
    } else if (participant instanceof CoolAircorn) {
      if (!participant.isOff) {
        this.heatBoiler.off();
        this.window.close();
        this.door.close();
      }
    } else if (participant instanceof HeatBoiler) {
      if (!participant.isOff) {
        this.coolAircorn.off();
        this.window.close();
        this.door.close();
      }
    }
    this.display();
  }

  display() {
    const domDoor = document.querySelector(".door") as HTMLElement;
    const domWindow = document.querySelector(".window") as HTMLElement;
    const domHeatBoiler = document.querySelector(".heatboiler") as HTMLElement;
    const domCoolAircorn = document.querySelector(
      ".coolaircorn"
    ) as HTMLElement;

    this.door.displayState(domDoor);
    this.window.displayState(domWindow);
    this.heatBoiler.displayState(domHeatBoiler);
    this.coolAircorn.displayState(domCoolAircorn);
  }

  install() {
    const domDoor = document.querySelector(".door") as HTMLElement;
    const domWindow = document.querySelector(".window") as HTMLElement;
    const domHeatBoiler = document.querySelector(".heatboiler") as HTMLElement;
    const domCoolAircorn = document.querySelector(
      ".coolaircorn"
    ) as HTMLElement;

    domDoor.addEventListener("click", () => {
      if (this.door.isClosed) {
        this.door.open();
      } else {
        this.door.close();
      }
    });

    domWindow.addEventListener("click", () => {
      if (this.window.isClosed) {
        this.window.open();
      } else {
        this.window.close();
      }
    });

    domHeatBoiler.addEventListener("click", () => {
      if (this.heatBoiler.isOff) {
        this.heatBoiler.on();
      } else {
        this.heatBoiler.off();
      }
    });

    domCoolAircorn.addEventListener("click", () => {
      if (this.coolAircorn.isOff) {
        this.coolAircorn.on();
      } else {
        this.coolAircorn.off();
      }
    });

    this.display();
  }
}
