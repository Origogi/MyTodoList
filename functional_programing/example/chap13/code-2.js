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

const input = [1, 2, 3, 4, 5];
const window = 5;

console.log(sampleCode(input, window));
console.log(sampleCode2(input, window));
