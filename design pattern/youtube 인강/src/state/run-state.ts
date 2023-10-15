import { State } from "./state";
import { Player } from "./player";
import { StandUpState } from "./stand-up-state";

export class RunState extends State {
  constructor(player: Player) {
    super(player);
  }

  getDescription(): string {
    return "I am running";
  }

  run(): void {
    this.player.setSpeed(this.player.getSpeed() + 2);
    this.player.talk("I am running faster");
  }

  sitDown(): void {
    this.player.setSpeed(0);
    this.player.setState(new StandUpState(this.player));
    this.player.talk(
      "It is impossible to run while sitting down, so I am standing up"
    );
  }

  standUp(): void {
    this.player.setSpeed(0);
    this.player.setState(new StandUpState(this.player));
    this.player.talk("I am standing up");
  }

  walk(): void {
    this.player.setState(new StandUpState(this.player));
    this.player.talk("I am walking");
    this.player.setSpeed(8);
  }
}
