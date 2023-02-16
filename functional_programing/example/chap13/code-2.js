function sampleCode(array, window) {
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    var sum = 0;
    var count = 0;

    for (var w = 0; w < window; w++) {
      var idx = i + w;
      if (idx < array.length) {
        sum += array[idx];
        count += 1;
      }
    }
    answer.push(sum / count);
  }

  return answer;
}

function sampleCode2(array, window) {
  var answer = [];

  var indices = range(0, array.length);

  var answer = map(indices, function (i) {
    var subarray = array.slice(i, i + window);
    return average(subarray);
  });

  return answer;
}

function range(start, end) {
  var ret = [];
  for (var i = start; i<end;i++) {
    ret.push(i);
  }
  return ret;
}

function average(array) {
  return sum(array) / array.length;
}

function sum(array) {
  return reduce(array, 0, function (e, acc) {
    return acc + e;
  });
}

function forEach(array, f) {
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    f(item);
  }
}

function map(array, f) {
  var newArray = [];
  forEach(array, function (element) {
    newArray.push(f(element));
  });
  return newArray;
}

function reduce(array, init, f) {
  var result = init;
  for (var i = 0; i < array.length; i++) {
    result = f(array[i], result);
  }
  return result;
}

const input = [1, 2, 3, 4, 5];
const window = 5;

console.log(sampleCode(input, window));
console.log(sampleCode2(input, window));
