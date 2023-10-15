export class Context {
  private readonly keywords: string[];
  private currentIndex: number;

  constructor(script: string) {
    this.keywords = script.split(" ");
    this.currentIndex = 0;
  }

  readNextKeyword() {
    this.currentIndex++;
    return this.getCurrentKeyword();
  }

  getCurrentKeyword() {
    if (this.keywords.length > this.currentIndex) {
      return this.keywords[this.currentIndex];
    } else {
      return null;
    }
  }
}
