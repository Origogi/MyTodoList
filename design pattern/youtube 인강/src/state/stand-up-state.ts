import { State } from "./state";
import { Player } from "./player";
import { SitDownState } from "./sit-down-state";
import { WalkState } from "./walk-state";
import { RunState } from "./run-state";

export class StandUpState extends State {
  constructor(player: Player) {
    super(player);
  }

  getDescription(): string {
    return "I am standing up";
  }

  run(): void {
    this.player.setSpeed(12);
    this.player.setState(new RunState(this.player));
    this.player.talk("I am running");
  }

  sitDown(): void {
    this.player.setState(new SitDownState(this.player));
    this.player.talk("I am sitting down");
  }

  standUp(): void {
    this.player.talk("I am standing up already");
  }

  walk(): void {
    this.player.setSpeed(8);
    this.player.setState(new WalkState(this.player));
    this.player.talk("I am walking");
  }
}
