const buf = Buffer.from('Hey!');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // fast
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2);
console.log(buf3);

console.log(buf2.toString());

buf2.copy(buf3);
console.log(buf3.toString());

const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());