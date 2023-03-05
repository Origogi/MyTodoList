const callback = (collectedValues, item) => [...collectedValues, item]

const saying = ['veni', 'vedi', ' veci'];

const initialValue = [];

const copy = saying.reduce(callback, initialValue);
console.log(copy);

const dogs = [
    {
        이름: '맥스',
        크기: '소형견',
        견종: '보스턴테리어',
        색상: '검정색'
    },
    {
        이름: '도니',
        크기: '대형견',
        견종: '레브라도리트리버',
        색상: '검정색'
    }, {
        이름: '새도',
        크기: '중현견',
        견종: '레브라도리트리버',
        색상: '갈색'
    }
]

const colors = dogs.reduce((acc, dog) => {
    return [...acc, dog['색상']];
}, []);

console.log(colors);

const filters = dogs.reduce((filters, item) => {
    filters.breed.add(item['견종']);
    filters.size.add(item['크기']);
    filters.color.add(item['색상']);
    return filters;

}, {
    breed : new Set(),
    size : new Set(),
    color : new Set()
});

console.log(filters);

const developers = [
    { name : 'Jeff', language : 'php'},
    { name : 'Ashely', language : 'python'},
    { name : 'Sara', language : 'python'},
    { name : 'Joe', language : 'Javascript'},
];

const aggregate = developers.reduce((acc, item) => {
    const count = acc[item.language] || 0;
    return {
        ...acc,
        [item.language] : count + 1
    }
}, {});

console.log(aggregate);