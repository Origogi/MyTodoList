
const comic = {
    first: 'Peter',
    last: 'Parker',
    city: 'New York',
    state: 'Washington'
}
const getName = ({first, last}) => `${first} ${last}`;

console.log(getName(comic));

