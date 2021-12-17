import { valueFromNode } from '../../node_modules/apollo-utilities/lib/storeUtils.js';
import {Invoice}      from './classes/Invoice.js'
import {Payment}      from './classes/Payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('Mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];

docs.push(docOne)
docs.push(docTwo)

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'CodeKrakken',
  age: 25,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ' + amount)
    return amount;
  }
}

const greetPerson = (person: IsPerson) => {
  console.log('Hello, ' + person.name)
}

console.log(me)
greetPerson(me)

const inv1 = new Invoice('Mario', 'Saving the Princess', 330)
const inv2 = new Invoice('Luigi', 'Hangin about, wearing green', 330)

let invoices: Invoice[] = [];
invoices.push(inv1)
invoices.push(inv2)

invoices.forEach(invoice => {
  console.log(invoice.format())
})

console.log(invoices)

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children)

const type    = document.querySelector('#type'    ) as HTMLSelectElement;
const tofrom  = document.querySelector('#toFrom'  ) as HTMLSelectElement;
const details = document.querySelector('#details' ) as HTMLSelectElement;
const amount  = document.querySelector('#amount'  ) as HTMLSelectElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }
  console.log(doc);
});