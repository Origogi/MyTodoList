import { Participant } from "./participant";
import { Mediator } from "./mediator";

export class Door extends Participant {
  private _isClosed = false;

  constructor(mediator: Mediator) {
    super(mediator);
  }

  displayState(dom: HTMLElement): void {
    dom.innerText = this._isClosed ? "문 close" : "문 open";

    if (this._isClosed) {
      dom.classList.remove("hilighting");
    } else {
      dom.classList.add("hilighting");
    }
  }

  open() {
    if (!this._isClosed) {
      return;
    }

    this._isClosed = false;
    this.mediator.participantChanged(this);
  }

  close() {
    if (this._isClosed) {
      return;
    }

    this._isClosed = true;
    this.mediator.participantChanged(this);
  }

  get isClosed(): boolean {
    return this._isClosed;
  }
}
