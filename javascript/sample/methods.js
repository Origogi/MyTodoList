const prices = ['1.0', '흥정가능', '2.15']

const formattedPrices = prices.map(price => parseFloat(price)).filter(price => price);
console.log(formattedPrices); // [1, 2.15]