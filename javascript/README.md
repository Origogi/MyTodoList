# 자바스크립트 코딩의 기술


[책 링크](http://www.yes24.com/Product/Goods/85019231)


## const 로 변하지 않는 값을 표현하라.

const 는 블록의 문맥 내에서 재할당할 수 없는 변수 선언이다.

## let과 const로 유효 범위 충돌을 줄여라

- var 은 어휘적 유효 범위를 따르는 반면, let은 불록 유효 범위를 따른다. 
- 변수를 선언할 때는 var 보다는 let를 사용하도록 하자
- let 과 const 는 같은 이름을 다시 선언할수 없기 때문에 안전하다.

## push() 메서드 대신 spread 연산자로 원본 변경을 피하라

```js
const titles = ['Moby Dick', 'White teeth'];
const moreTitles = [...titles, 'The Conscious Mind'];
```