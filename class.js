// module 32-7

class Support {
    name;
    designation = 'Support wev Dev ';
    address = 'BD'
   constructor (name,address){
       this.name = name;
       this.address = address;
   } //class এর ভিতর  অবজেক্ট   এর প্রপার্গুলো একসেস করার জন্য this  ইউজ কর হয়    
    // startSession() {
    //     console.log(this.name,'start a support session')
    // }
}

const ammir = new Support('amir Khan ', 'dubai');
// const dubi= new Support();
// ammir.startSession()
console.log(ammir)





/* class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');
aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharuk, akshay);
// console.log(salman); */