const _ = require("fxjs");
const L = require("fxjs/Lazy");

const track = [
  { cars: ["철수", "영희", "철희", "영수"] },
  { cars: ["하루", "이틀", "사흘", "나흘"] },
  { cars: ["일곱", "여덟", "아홉", "열"] },
  { cars: ["열한", "열두", "열세"] },
  { cars: [] },
];

_.go(
  L.range(Infinity),
  L.map((i) => track[i]),
  L.map(({ cars }) => cars),
  L.map(_.delay(2000)),
  L.takeUntil(({ length : l}) => l < 4),
  L.flat,
  L.map(_.delay(300)),
  L.map(car => `${car} 출발`),
  _.each(console.log));

