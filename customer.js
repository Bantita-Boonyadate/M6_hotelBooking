var fs = require('fs');

const Customer = function(customer_id, customer_name, customer_address, customer_phone) {
    this.customer_id = customer_id;
    this.customer_name = customer_name;
    this.customer_address = customer_address;
    this.customer_phone = customer_phone;
}

Customer.prototype.getCustomer = function() {
    return `${this.customer_id} ${this.customer_name} ${this.customer_address} ${this.customer_phone}`;
}

var customers = new Array();
customers.push(new Customer(1, "June", "Chiang Mai, Thailand", "0931234567"));
customers.push(new Customer(2, "Alice", "Los Angeles, United States", "0804561234"));
customers.push(new Customer(3, "Charlie", "Cambridge, United Kingdom", "0856784512"));
customers.push(new Customer(4, "Emma", "Paris, France", "0924567803"))
customers.push(new Customer(5, "Harry", "Berlin, Germany", "0893789521"));

// console.table(customers);

// createCustomer = (id, name, address, phone) => {
//     let boolean = false;
//     customers.forEach((customer) => {
//         if(customer.customer_id == id) {
//             console.log("ไม่สร้าง");
//             boolean = true;
//         }
//     })
//     if (boolean == false) {
//         customers.push(new Customer(id, name, address, phone))
//         return customers;
//     } else if(boolean == true) {
//         console.log("ไม่สร้าง");
//     }

// }

// createCustomer(8, "Gunny", "Los Angeles, United States", "0972365401")
// createCustomer(10, "Tat", "Riga, Latvia", "0826781239")
// console.table(customers);



module.exports = {
    customers: customers,
    Customer: Customer

};