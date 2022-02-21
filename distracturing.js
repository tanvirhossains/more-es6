// module 32-2
// distructuring = অবজেক্টে একাধিক প্রপার্টি এর ভ্যালু  একসাথে বের করে ভেরিয়েবলে রাখাকে destructuring বলে। 
const fish = {
    id: 58, name: 'King Hilsha', price: 900, phone: '017175555555', address: 'Chandpur', dress: 'silver'
}

const { name, dress, phone, id } = fish;


console.log(id, phone, dress)

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