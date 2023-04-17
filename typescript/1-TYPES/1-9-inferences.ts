// Type Inference

{
  let text = 'hello'; // 선언함과 동시에 스트링를 set 을 함으로써 text 는 string type 이 된다.

  function print(message = 'hello' ) {
    console.log(message);
  }

  print('hi');
//   print(1); // 에러

  function add(x : number, y :number) {
    return x + y;
  }
}
