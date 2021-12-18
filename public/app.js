import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('Mario', 'plumbing work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const me = {
    name: 'CodeKrakken',
    age: 25,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ' + amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('Hello, ' + person.name);
};
console.log(me);
greetPerson(me);
const inv1 = new Invoice('Mario', 'Saving the Princess', 330);
const inv2 = new Invoice('Luigi', 'Hangin about, wearing green', 330);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(invoice => {
    console.log(invoice.format());
});
console.log(invoices);
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
