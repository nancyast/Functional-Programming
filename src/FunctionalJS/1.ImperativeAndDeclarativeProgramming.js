// Example - Invoice Class
// Create invoices with a given invoice number
// Add products to the invoice
// Get the billed sum
class Invoice {
  constructor(invoiceNumber) {
    this.invoiceNumber = invoiceNumber;
    this.items = [];
  }

  addItem(quantity, price, description) {
    this.items.push({
      quantity,
      price,
      description,
    });
  }

  get sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      sum += item.quantity * item.price;
    }
    return sum;
  }
}

const invoice1 = new Invoice(1);

invoice1.addItem(2, 10, 'T-shirt');
invoice1.addItem(2, 10, 'Bag');
console.log('invoice1.sum ', invoice1.sum);

// Functional Programming
function createInvoice(invoiceNumber) {
  return {
    invoiceNumber,
    items: [],
  };
}

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

function addItem(invoice, quantity, price, description) {
  const newInvoice = clone(invoice);
  newInvoice.items.push({
    quantity,
    price,
    description,
  });
}

function calculateSum(invoice) {
  const reducer = (acc, item) => acc + item.quantity * item.price;
  return invoice.items.reduce(reducer, 0);
}

const invoice1a = createInvoice(1);
const invoice1b = addItem(invoice1a, 2, 10, 'T-shirt');

/* Imperative and Declarative Programming
Imperative Programming
Example: OOP
Focus on HOW
Stateful
We can mutate state
Often rely on side-effects
 */

/* Declarative Programming
Example: Functional programming
Focus on WHAT
Stateless
Constants, immutability
No Side-effects
 */
