import { Handler } from "./handler";

export class DomainHandler extends Handler {
  protected process(url: string): void {
    const startIndex = url.indexOf("://");
    const lastIndex = url.lastIndexOf(":");

    if (startIndex === -1) {
      if (lastIndex === -1) {
        this.displayResult("Domain", url);
      } else {
        this.displayResult("Domain", url.substring(0, lastIndex));
      }
    } else if (startIndex !== lastIndex) {
        this.displayResult("Domain", url.substring(startIndex + 3, lastIndex));
    } else if (startIndex === lastIndex) {
        this.displayResult("Domain", url.substring(startIndex + 3));
    } else {
      this.displayResult("Domain", "Unknown");
    }
  }
}
