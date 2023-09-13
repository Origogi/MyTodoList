export abstract class Item {
    abstract getLinesCount(): number;
    abstract getLength(index : number): number;
    abstract getMaxLength(): number;
    abstract getString(index : number): string;

    print(dom : HTMLElement) {
        const result : string[] = [];

        for (let i = 0; i < this.getLinesCount(); i++) {
            result.push(this.getString(i));
        }
        dom.innerHTML = result.join('\n');
    }
}