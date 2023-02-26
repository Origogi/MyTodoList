const book = {
    title : 'Reasons and Persons',
    author : 'Derk Parfit',
}

const add = {
    ...book,
    year: 1984
};

console.log(add); 

const update = {
    ...book,
    title: 'Harry potter'
};

console.log(update);