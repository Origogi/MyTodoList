let filters = new Map();

filters.set("견종", "레브라도레트리버");

console.log(filters.get("견종"));

filters = new Map([
    ["견종", "레브라도레트리버"],
    ["색상", "검정색"],
    ["나이", "1살"],
]);

console.log(filters.get("색상"));

filters.delete("색상");
console.log(filters.get("색상"));

let errors = new Map([
  [100, "이름이 잘못되었습니다."],
  [110, "이름에는 문자만 입력할 수 있습니다."],
  [200, "색상이 잘못되었습니다."],
]);

console.log(errors.get(100));

console.log(errors[100]); // 이 연산은 안되네..

function checkFilters(filters) {
  for (const entry of filters) {
    console.log(entry);
  }
}

checkFilters(filters);

console.log(filters.entries());

console.log([...filters]);

function getSortedAppliedFilter(filters, sortByKey) {
  const applied = [...filters]
    .sort(sortByKey)
    .map(([key, value]) => `${key} : ${value}`)
    .join(", ");

    return `선택한 조건은 ${applied} 입니다.`;
}

console.log(getSortedAppliedFilter(filters, (a, b) => a[0] > b[0] ? 1: -1));

const defaults  = new Map([
    ["색상", "검정색"],
]);

filters = new Map([
    ["견종", "레브라도레트리버"],
    ["색상", "브라운"],
    ["나이", "1살"],
]);

function applyDefaults(map, defaults) {
    return new Map([...defaults, ...map]);
}

console.log(applyDefaults(filters, defaults));