// 하나의 파일에서 default 키워드는 오직 한개만 사용 가능하다.
export default function add(a, b) {
  return a + b;
}

export function print() {
  console.log('hello module1');
}
