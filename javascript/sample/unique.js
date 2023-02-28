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
    },    {
        이름: '새도',
        크기: '중현견',
        견종: '레브라도리트리버',
        색상: '갈색'
    }
]

function getColors(dogs) {
    return dogs.map(dog => dog['색상']);
}

console.log(getColors(dogs));   

function getUnique(attributes) {
    return [...new Set(attributes)];
}


const { 색상 , 이름 } = dogs[0];
console.log(색상);
console.log(이름);


const result = [...dogs.reduce((colors, { 색상 }) => colors.add(색상), new Set())];
console.log(result);