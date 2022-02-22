// module 32-2
// distructuring = অবজেক্টে একাধিক প্রপার্টি এর ভ্যালু  একসাথে বের করে ভেরিয়েবলে রাখাকে destructuring বলে। 
const fish = {
    id: 58, name: 'King Hilsha', price: 900, phone: '017175555555', address: 'Chandpur', dress: 'silver'
}

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { name, dress, phone, id } = fish;
// console.log(phone, price);
// console.log(phone, id);
// console.log(phone, dress);
// console.log(phone, price);
// console.log(phone);




console.log(id, phone, dress)


//if i wanna use double object then this system can be use
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'wevsite development ', employee: 22, framework: 'react',
        tech: {
            first:'html',
            second:'css',
            third: 'js'
        },
    },
};

const {work, framework} = company.web;
const { third, second} = company.web.tech;

console.log(third, framework)