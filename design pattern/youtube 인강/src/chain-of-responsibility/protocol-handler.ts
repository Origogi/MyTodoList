import { Handler } from "./handler";

export class ProtocolHandler extends Handler {
  protected process(url: string): void {
    const index = url.indexOf("://");
    if (index === -1) {
      this.displayResult("Protocol", "Unknown");
    } else {
      this.displayResult("Protocol", url.substring(0, index));
    }
  }
}
