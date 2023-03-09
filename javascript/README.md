# 자바스크립트 코딩의 기술

[책 링크](http://www.yes24.com/Product/Goods/85019231)

## const 로 변하지 않는 값을 표현하라.

const 는 블록의 문맥 내에서 재할당할 수 없는 변수 선언이다.

## let과 const로 유효 범위 충돌을 줄여라

-   var 은 어휘적 유효 범위를 따르는 반면, let은 불록 유효 범위를 따른다.
-   변수를 선언할 때는 var 보다는 let를 사용하도록 하자
-   let 과 const 는 같은 이름을 다시 선언할수 없기 때문에 안전하다.

## push() 메서드 대신 spread 연산자로 원본 변경을 피하라

```js
const titles = ['Moby Dick', 'White teeth'];
const moreTitles = [...titles, 'The Conscious Mind'];
```

## Spread 연산자로 정렬에 의한 혼란을 피하라

`sort()` 메소드는 정렬을 하는 메소드이나 문제는 배열의 원본이 변경이 된다.
따라서 아래와 같이 배열을 카피 한 후 정렬을 하는 것이 안전하다.

```js
const arry = [
    /* ... */
];
[...arry].sort();
```

## 객체 Spread 연산자로 정보를 갱신하라.

### data 추가

```js
const book = {
    title: 'Reasons and Persons',
    author: 'Derk Parfit',
};

const update = {
    ...book,
    year: 1984,
};
```

### data 업데이트

```js
const book = {
    title: 'Reasons and Persons',
    author: 'Derk Parfit',
};

const update = {
    ...book,
    title: 'Harry potter',
};
```

## 맵으로 명확하게 키-값 데이터를 갱신하라.

맵은 기존 객체를 대체하기 위한 컬랙션이다.

객체 대신 맵을 사용해야 할 경우는 다음과 같습니다.

-   키-값이 자주 추가가 되거나 삭제되는 경우
-   키가 문자열이 아닌 경우

## 맵과 Spread 연산자로 키-값 데이터를 순회하라

```js
function checkFilters(filters) {
    for (const entry of filters) {
        console.log(entry);
    }
}
```

## 맵 생성시 부수효과를 제거하라

아래 코드는 두 개의 맵을 병합하는 코드이다.

```js
function applyDefaults(map, defaults) {
    return new Map([...defaults, ...map]);
}
```

주의할 점은 위 두 개의 맵에서 같은 키가 존재한다면 뒤에 있는 맵의 값으로 적용된다.
즉 순서가 중요하다.

## 세트를 이용해 고윳값을 관리하라

```js
function getUnique(attributes) {
    return [...new Set(attributes)];
}
```

## 삼항 연산자로 빠르게 데이터를 확인하라

```js
const permissions = title === '과장' ? ['근로시간', '수당'] : ['근로시간'];
```

다만 삼항 연산자는 코드를 단순화할 수 있을 경우에만 사용하고, 삼항 연산자로 인해 지나치게 코드가 모호해진다면 일반적인 if 문으로 돌아가는 것이 바람직하다.

## 최고의 정비사는 언제나 일에 작합한 도구를 선택한다.

## 화살표 함수로 반복문을 단순하게 만들어라

화살표 함수는 필요하지 않은 정보를 최대한 걷어낸다.

다음과 같은 정보가 없어도 함수를 사용할 수 있다.

- function 키워드
- 인수를 감싸는 괄호
- return 키워드
- 중괄호

```js
const capital = name => name[0].toUpperCase() + name.slice(1);

capital('hello world'); // Hello world

const greeting = (first, last) => `Hello ${first} ${last}`;

console.log(greeting('John', 'Doe'));

```

## 배열 메소드로 반복문을 짧게 작성하라

배열 메서드는 불필요한 데이터를 배제한, 간결하고 예측 가능한 코드를 만드는 것이다.

- map() : 배열의 각 요소에 함수를 적용한 결과를 모아 새로운 배열을 반환한다.
- sort() : 배열의 요소를 정렬한다.
- filter() : 배열의 요소를 테스트하는 함수를 만족하는 요소만 모아 새로운 배열을 반환한다.
- find() : 배열의 요소를 테스트하는 함수를 만족하는 첫 번째 요소를 반환한다.
- forEach() : 배열의 각 요소에 함수를 적용한다.
- reduce() : 배열의 각 요소에 함수를 적용하여 하나의 값을 반환한다.

```js
const formattedPrices = prices.map(price => parseFloat(price)).filter(price => price);
console.log(formattedPrices); // [1, 2.15]
```

## map() 메소드로 비슷한 길이의 배열을 생성하라

## forEach() 로 동일한 동작을 적용하라

forEach() 에서 처리하는 동작은 모두 함수 외부에 영향을 준다. 함수의 유효 범위 밖에 있는 무언가를 변경하는 것을 부수 효과라고 한다. 부수 효과가 잘못된 건 아니지만 주의할 필요가 있다.

## 체이닝으로 메소드를 연결하라

체이닝을 간단히 정의하면, 값을 다시 할당하지 않고 반환된 객체(또는 경우에 따라 원래 객체)에 메소드를 즉시 호출하는 것을 의미한다.

```js

sailors
    .filter(sailor => sailor.actice)
    .map(sailor => sailor.email || `${sailor.name}@wiscsail.io`)
    .forEach(sailor => sendEmail(sailor));
```

배열 메소드 체이닝의 유일한 단점은 새로운 메소드를 호출할 때마다 반환된 배열 전체를 반복한다. 즉 성능이 느릴수 있다.

## reduce() 로 배열 데이터를 변환하라

reduce() 의 가장 중요한 특징은 배열의 길이와 데이터 형태를 모두 또는 각각 변경할 수 있고, 또한, 반드시 배열을 반환할 필요도 없다.

## for ... in 문과 for ... of 문으로 반복문을 정리하라

## 매개변수 기본값을 생성하라

```js
function convertWeight(weight, ounces, roundTo = 2) {
    const oz = ounces ? ounces / 16 : 0;
    const total = weight + oz;
    const conversion = total / 2.2;
    return roundToDecimalPlace(conversion, roundTo);
}
```

## 해체 할당으로 객체 속성에 접근하애라

아래와 같이 해체 할당을 하면서 디폴트 값도 지정할수 있다.

```js

const landScape = {
    photographer : 'Nathan'
}

const { photographer, title = 'hello', size} = landScape;

console.log(photographer);  // Nathan
console.log(title);         // hello
console.log(size);          // undefined
```

아래와 같이 사용함으로써 객체를 두 개로 나눌수 있다.

```js
const landScape = {
    photographer : 'Nathan',
    equipment : 'Canon',
    format :' digital'
};

const {
    photographer,
    ...additional
} = landScape;

console.log(photographer);      // Nathan
console.log(additional);        // {  equipment : 'Canon', format :' digital'}
```

아래와 같이 사용함으로써 해제 연산자를 사용하면서 키 값을 변경할수 있다.

```js
const landScape = {
    src : '/landscape-nm.jpg'
};

const { src : url} = landScape;

console.log(url); // /landscape-nm.jpg
```

```js
const landScape = {
    location : [32.712222, -103.1405556]
};

const { location : [lat, lon] } = landScape;

console.log(lat);   // 32.712222
console.log(lon);   // -103.1405556
```

## 키-값 할당을 단순화하라

아래 코드는 location을 제거함과 동시에 city와 state를 추가한 코드이다.

```js
function setRegion({ location, ...details }) {
    const { city, state} = dtermineCitiAndState(location);
    
    return {
        city,
        state,
        ...details
    };
};
```

## 나머지 매개변수로 여러 개의 인수를 변수로 전달하라

... 연산자를 통해서 하나의 함수로 여러개의 인자를 넘길수 있다.

따라서 여러개의 인자를 넘기기 위해서 콜랙션에 담아서 넘기거나 여러개 의 함수를 만들 필요가 없다.

```js
function validateCharacterCount(max, ...items) {
    return items.every(item => item.length < max);
}

console.log(validateCharacterCount(10, 'hello', ));
console.log(validateCharacterCount(10, 'hello', 'world'));
console.log(validateCharacterCount(10, 'hello', 'world', 'this is a long string'));

```

## 테스트하기 쉬운 함구를 작성하라

테스트를 작성하면 코드를 쉽게 리팩터링할 수 있고, 오래된 코드를 훨씬 쉽게 이해할 수 있습니다. 그리고 테스트를 작성하면 일반적으로 더 명확하고 버그가 적은 애플리케이션을 만들수 있다.

대표적은 테스트 프레임워크는 아래와 같다.

- Mocha
- Jest
- Jasmine

## 화살표 함수로 복잡도를 낮춰라

```js
const comic = {
    first: 'Peter',
    last: 'Parker',
    city: 'New York',
    state: 'Washington'
}
const getName = ({first, last}) => `${first} ${last}`;

console.log(getName(comic));
```

## 부분 적용 함수로 단일 책임 매개변수를 관리하자