export const allActions = ['up', 'down', 'left', 'right'] as const;
export type ActionTuple = typeof allActions; // readonly ['hearts', 'diamonds', 'spades', 'clubs']
export type Action = ActionTuple[number];  // "hearts" | "diamonds" | "spades" | "clubs"


export class Memento {
  private readonly _actions: Action[] = [];

  get actions(): Action[] {
    return this._actions;
  }

  constructor(private _x: number, private _y: number, actions: Action[]) {
    this._actions = structuredClone(actions);
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }
}

export class BlindMan {
  private actions = new Array<Action>();

  constructor(
    private currentX: number,
    private currentY: number,
    private targetX: number,
    private targetY: number
  ) {}

  walk(action: Action) {
    this.actions.push(action);

    switch (action) {
      case "up":
        this.currentY++;
        break;
      case "down":
        this.currentY--;
        break;
      case "left":
        this.currentX--;
        break;
      case "right":
        this.currentX++;
        break;
    }

    return Math.sqrt(
      Math.pow(this.currentX - this.targetX, 2) +
        Math.pow(this.currentY - this.targetY, 2)
    );
  }

  createMemento(): Memento {
    return new Memento(this.currentX, this.currentY, this.actions);
  }

  restoreMemento(memento: Memento) {
    this.currentX = memento.x;
    this.currentY = memento.y;
    this.actions = memento.actions;
  }

  resultPath(): string {
    return this.actions.join(" -> ");
  }
}

