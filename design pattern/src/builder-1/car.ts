export class Car {
  constructor(
    private engine: string,
    private airbag: boolean,
    private color: string,
    private cameraSensor: boolean,
    private AEB: boolean
  ) {}

  print() {
    console.table(this);
  }

  setEngine(v: string) {
    this.engine = v;
    return this;
  }

  setAirbag(v: boolean) {
    this.airbag = v;
    return this;
  }

  setColor(v: string) {
    this.color = v;
    return this;
  }

  setCameraSensor(v: boolean) {
    this.cameraSensor = v;
    return this;
  }

  setAEB(v: boolean) {
    this.AEB = v;
    return this;
  }

  build() {
    if (!this.engine) {
      return null;
    }

    if (!this.color) {
      return null;
    }

    if (!this.AEB) {
      return null;
    }

    return new Car(
      this.engine,
      this.airbag,
      this.color,
      this.cameraSensor,
      this.AEB
    );
  }
}
