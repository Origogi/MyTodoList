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

## Spread 연산자로 정렬에 의한 혼란을 피하라

`sort()` 메소드는 정렬을 하는 메소드이나 문제는 배열의 원본이 변경이 된다.
따라서 아래와 같이 배열을 카피 한 후 정렬을 하는 것이 안전하다.

```js
const arry = [ /* ... */];
[...arry].sort();
```

## 객체 Spread 연산자로 정보를 갱신하라.

### data 추가

```js
const book = {
    title : 'Reasons and Persons',
    author : 'Derk Parfit',
}

const update = {
    ...book,
    year: 1984
};
```

### data 업데이트

```js
const book = {
    title : 'Reasons and Persons',
    author : 'Derk Parfit',
}

const update = {
    ...book,
    title: 'Harry potter'
};
```

## 맵으로 명확하게 키-값 데이터를 갱신하라.

맵은 기존 객체를 대체하기 위한 컬랙션이다.

객체 대신 맵을 사용해야 할 경우는 다음과 같습니다.

- 키-값이 자주 추가가 되거나 삭제되는 경우
- 키가 문자열이 아닌 경우

## 맵과 Spread 연산자로 키-값 데이터를 순회하라

```js
function checkFilters(filters) {
    for (const entry of filters) {
        console.log(entry);
    }   
}
```

