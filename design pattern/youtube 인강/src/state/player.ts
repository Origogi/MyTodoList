import { State } from "./state";
import { StandUpState } from "./stand-up-state";

export class Player {
  private speed: number = 0;
    private state: State;

  constructor(private dom: HTMLElement) {
    this.state = new StandUpState(this);
  }

  getSpeed(): number {
    return this.speed;
  }

  setSpeed(speed: number): void {
    this.speed = speed;
  }


  talk(msg: string) {
    this.dom.innerText = msg;
  }

  setState(state: State) {
    this.state = state;
  }

  getState(): State {
    return this.state;
  }
}
