{
  // Type Script
  function add(a: number, b: number): number {
    return a + b;
  }

  // Javascript
//   function jsFetchNum(id) {
//     // code ...
//     // code ...
//     // code ...
//     return new Promise((resolve, reject) => {
//       resolve(100);
//     });
//   }

  // TypeScript
  function tsFetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('Steve', 'Jobs');
  printName('Ellie');

  // Default Parameters
  function printMessage(message: string = 'default message') {
    console.log(message);
  }

  printMessage();

  // Rest Parameters
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));

//   console.log(addNumbers(1, 2. '3')); Compile Error
  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}
