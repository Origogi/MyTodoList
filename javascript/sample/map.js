let filters = new Map();

filters.set('견종', '레브라도레트리버');

console.log(filters.get('견종'));

filters = new Map([
    ['견종', '레브라도레트리버'],
    ['색상', '검정색'],
    ['나이', '1살'],
 ]);

console.log(filters.get('색상'));

filters.delete('색상');
console.log(filters.get('색상'));


let errors = new Map([
    [100, '이름이 잘못되었습니다.'],
    [110, '이름에는 문자만 입력할 수 있습니다.'],
    [200, '색상이 잘못되었습니다.'],
]);

console.log(errors.get(100));

console.log(errors[100]); // 이 연산은 안되네..
