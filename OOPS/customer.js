const Address = require('./Address')
const Operation = require('./operation')

class Bank_Customer{
    constructor(acc_No, acc_Name, age, address, operation){
        this.acc_No = acc_No;
        this.acc_Name = acc_Name;
        this.age = age;
        this.address = address;
        this.operation= operation;
    }
}

/* class Address{
    constructor(house_no, area, city){
        this.house_no = house_no;
        this. area = area;
        this.city = city;
    }
} */

let customer = new Bank_Customer(101,'Abhishek', 24, new Address(5,'Munnekolala', 'Bangalore'), new Operation('Abhishek', 7000))
/* console.log(customer) */
/* console.log(customer) */
/* console.log(customer.address.city) */
console.log(customer.operation.amount)
