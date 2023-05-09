const fs = require('fs');

// try {
//     fs.renameSync('./text.txt', './text-new.txt');
// } catch (e) {
//     console.log(e);
// }
//
// fs.rename('./text-new.txt', './text.txt', (error) => {
//     console.log(error);
// });

fs.promises.rename('./text.txt', './text-new.txt')
    .then(() => console.log('Done!'))
    .catch(console.error);

console.log('hello');
