export class Digit {
  private data: Array<string> | null = null;

  constructor(private url: string) {}

  private load(url: string, domOutput: Element) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.data = json;

        if (domOutput) {
          this.put(domOutput);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  put(dom: Element) {
      if (!this.data) {
          this.load(this.url, dom);
          return;
      } else {
          dom.innerHTML = `<div class="digit-layout"></div>`
          const digitLayout = dom.querySelector('.digit-layout');
          this.data.forEach((item : string) => {
              const len = item.length;

              for (let i = 0; i < len; i++) {
                  const domCell = document.createElement('div');
                  domCell.style.backgroundColor = item[i] === '1' ? '#ff0' : '#333';
                  digitLayout?.append(domCell);
              }
          });
      }
  }
}
