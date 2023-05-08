let count = 0;
function increase() {
    count++;
}

function getCount() {
    return count;
}

exports.getCount = getCount;
exports.increase = increase;
