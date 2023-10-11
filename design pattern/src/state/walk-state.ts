import { State } from "./state";
import { Player } from "./player";
import { StandUpState } from "./stand-up-state";
import { RunState } from "./run-state";

export class WalkState extends State {
  constructor(player: Player) {
    super(player);
  }

  getDescription(): string {
    return "I am walking";
  }

  run(): void {
    this.player.setSpeed(20);
    this.player.setState(new RunState(this.player));
    this.player.talk("I am running");
  }

  sitDown(): void {
    this.player.setSpeed(0);
    this.player.setState(new StandUpState(this.player));
    this.player.talk(
      "It is impossible to walk while sitting down, so I am standing up"
    );
  }

  standUp(): void {
    this.player.setSpeed(0);
    this.player.setState(new StandUpState(this.player));
    this.player.talk("I am standing up");
  }

  walk(): void {
    this.player.talk("I am walking already");
  }
}
