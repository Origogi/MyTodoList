{
  // Type Assertions

  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();
  console.log((result as string).length); // 100% 장담할 때
  console.log((<string>result).length); // 100% 장담할 때

  const wrong: any = 5;

  (<Array<number>>wrong).push(3); // 잘못된 타입 캐스팅으로 exception 발생
}
