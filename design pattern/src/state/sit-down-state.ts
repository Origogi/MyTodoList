import { State } from "./state";
import { Player } from "./player";
import { StandUpState } from "./stand-up-state";

export class SitDownState extends State {
  constructor(player: Player) {
    super(player);
  }

  getDescription(): string {
    return "I am sitting down";
  }

  run(): void {
    this.player.setState(new StandUpState(this.player));
    this.player.talk(
      "It is impossible to run while sitting down, so I am standing up"
    );
  }

  sitDown(): void {
    this.player.talk("I am sitting down already");
  }

  standUp(): void {
    this.player.setState(new StandUpState(this.player));
    this.player.talk("I am standing up");
  }

  walk(): void {
    this.player.setState(new StandUpState(this.player));
    this.player.talk(
      "I am standing up"
    );
  }
}
