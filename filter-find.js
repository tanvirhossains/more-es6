// module 32-6

// filter works as a condition (if, else if )
const numbers = [5,13, 7,41, 45,49 ]
const bigNumber = numbers.filter(number=>number>20);
const smallNumbers =numbers.filter(number => number<10 )
console.log(smallNumbers)
console.log(bigNumber)


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone ', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'water glass', price: 3000, color: 'white' }
]

const expensivePrice = products.filter(product => product.price >= 3000)
const blacks = products.filter(product => product.color == 'black')
const noBlacks = products.filter(product => product.color == 'pick')
console.log('with black:-', blacks)
console.log('with expensive price:-', expensivePrice)
console.log('it is no blacks:',noBlacks)


const whiteItem = products.find(product => product.color == 'pink');
const balckItem = products.find(product => product.color == 'black');
console.log('no color in find:-', whiteItem)
console.log('black in find:-', balckItem)