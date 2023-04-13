{
  // Type Script
  function add(a: number, b: number): number {
    return a + b;
  }

  // Javascript
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });

    // TypeScript
    function tsFetchNum(id: string): Promise<number> {
      // code ...
      // code ...
      // code ...
      return new Promise((resolve, reject) => {
        resolve(100);
      });
    }
  }
}
