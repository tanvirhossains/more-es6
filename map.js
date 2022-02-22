// module 32-4

const numbers =[4,6,8,10];

const multiple = a => a*a

const output = [];
/* for (const number of numbers){
    const result = multiple(number);
    output.push(result)
}
console.log(output) */

/* for (const number of numbers){
    const result = number*3;
    output.push(result)
}
console.log(output) */


//loop through each elemtn 
//2. for each element call the  provided functino
//3. result for each element will he stored in array 

// const usingMap = numbers.map(multiple);
const usingMap = numbers.map(a =>a*a);
console.log(usingMap)