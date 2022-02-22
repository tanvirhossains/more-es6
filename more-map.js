// module 32-5

//------------map--------------------------
const friends = ['Tom Hanks', 'Tom Cruise', 'tom Brady', 'Tom Solaimen', 'Tanvir Hossain'];


const fLength = friends.map(friend => friend.length); //This line to find the string length. 9 , 10 
const fLength = friends.map(friend => friend.length >10); //This line will show which is gater than 10 will show true otherwise false
console.log(fLength)

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone ', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'water glass', price: 3000, color: 'white' }
]

const productName = products.map(product=> product.name);//to get all products name
const productPrice = products.map(produc => console.log ('this is price:',produc.price));
console.log('this is product name:-',productName)


products.forEach(product =>console.log('for product colorf:-', product.color));//forEach use when we no need return 
