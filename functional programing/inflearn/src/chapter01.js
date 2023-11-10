// console.log("Hello, world!");

// 홀수 n개 더하기

const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const { range } = require("fxjs");

function f1(limit, list) {
  const ret = _.reduce(
    (acc, item) => acc + item,
    0,
    L.take(
      limit,
      L.map(
        (a) => a * a,
        L.filter((a) => a % 2, list)
      )
    )
  );

  console.log(ret);
}

// f1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function f3(end) {
  let i = 0;
  while (i < end) {
    console.log(i);
    i++;
  }
}

f3(5);

function f4(end) {
  _.each(console.log, L.range(1, end, 2));
}

f4(10);

const join = (sep) => _.reduce((a, b) => `${a}${sep}${b}`);

function f5(num) {
  _.go(
    _.range(1, 6),
    _.map(_.range),
    _.map(_.map((_) => "*")),
    _.map(join("")),
    _.reduce((a, b) => `${a}\n${b}`),
    console.log
  );
}

f5(5);

function gugudan() {
  _.go(
    _.range(2, 10),
    _.map((a) =>
      _.go(
        _.range(1, 10),
        _.map((b) => `${a} * ${b} = ${a * b}`),
        join("\n")
      )
    ),
    join("\n\n"),
    console.log
  );
}

gugudan();
