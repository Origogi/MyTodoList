const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");

const obj1 = {
  a: 1,
  b: undefined,
  c: "CC",
  d: "DD",
};

function query1(obj) {
  let res = "";
  for (const k in obj) {
    const v = obj[k];
    if (v === undefined) {
      continue;
    }

    if (res !== "") {
      res += "&";
    }

    res += `${k}=${v}`;
  }
  return res;
}

function query2(obj) {
  return Object.entries(obj).reduce((query, [k, v], i) => {
    if (v === undefined) {
      return query;
    }
    return `${query}${i > 0 ? "&" : ""}${k}=${v}`;
  }, "");
}

const join = _.curry((sep, iter) => _.reduce((a, b) => `${a}${sep}${b}`, iter));

function query3(obj) {
  return join(
    '&',
    _.map(
      ([k, v]) => `${k}=${v}`,
      _.filter(([k, v]) => v !== undefined, Object.entries(obj))
    )
  );
}

const query4 = _.pipe(
  Object.entries,
  _.filter(([k, v]) => v !== undefined),
  _.map((join('='))),
  join('&')
);

console.log(query1(obj1));
console.log(query2(obj1));
console.log(query3(obj1));
console.log(query4(obj1));
