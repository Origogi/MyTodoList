{
  let name = 'hello';
  name = 'hi';

  // number
  const num: number = 6;
  // String
  const str: string = 'hello';
  // Boolean
  const boal: boolean = false;

  // undefined 아직 값이 결정되지 않음

  let age : number | undefined;
  age = 3;
  age = undefined;

  // null : 값이 명확하게 없을 때 사용
  let person2: string | null;

  // unknown : 어떤 타입이 될지 모를 때 사용, 가능하면 사용하지 않는 것이 좋음
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  function print() {
    console.log('hello');
    return;
  }


  // object 도 최대한 사용하지 말것
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
