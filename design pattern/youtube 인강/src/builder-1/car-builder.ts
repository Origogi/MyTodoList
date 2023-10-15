import { Car } from "./car";

export class CarBuilder {
  private engine: string = "";
  private airbag: boolean = false;
  private color: string = "";
  private cameraSensor: boolean = false;
  private AEB: boolean = false;

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
