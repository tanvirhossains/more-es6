// module 32-3

//declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { b, x } = myObject;
console.log('from object:', b);

//destructuring array 
const [a, p, g] = ['abul', 'babul', 78]
console.log('from array:', p);


const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'wevsite development ', employee: 22, framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        },
    },
};
console.log('from multiple object:', company.web?.tech.third)

 console.log('if undefine value then one object then it will show undefine', company.also)


// console.log('more then one value then it show error:-', company.ceo.tech)
console.log('more then one value then it show error:-', company?.ceo?.tech?.soso) // ? use then when  if any object  have no value then it will show undefine it will work only for  next one object,but if more than one object have then it goes to error;
// if any object have value and we use ? then the peoperty will run and show the value in the  "Terminal"  //please see in 25 line "from multiple object"