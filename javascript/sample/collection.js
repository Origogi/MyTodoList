function removeItems(items, removable) {
    const index = items.indexOf(removable);

    return [
        ...items.slice(0, index),
        ...items.slice(index + 1)
    ];
}

const result = removeItems([1, 2, 3, 4, 5], 3);
console.log(result);

const book = ['Reasons and Persons', 'Derek Parfit', 19.99];

function formatBook(title, author, price) {
    return `${title} by ${author} $${price}`;
}

console.log(formatBook(...book));