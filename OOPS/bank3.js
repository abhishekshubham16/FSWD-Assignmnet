class BankCustomer{
    min_Bal = 500;
    constructor(acc_No, acc_Name, age, amount, e={}) {
        this.acc_No=acc_No;
        this.acc_Name=acc_Name;
        this.age=age;
        this.amount=amount;
        this.location=e;
    }
    get_details(){
        console.log(`${this.acc_Name} account is created`)
    }
    withdrawl(){
        console.log(`${this.acc_Name} has withdrawl amount Rs${this.amount-this.min_Bal}`)
    }
    get_bal(){
        console.log(`${this.acc_Name} has having balance of Rs${this.min_Bal}`)
    }
}

let customer = new BankCustomer(102, 'Abhishek', 24, 1000, {location: 'Bangalore'})
customer.get_details();
customer.withdrawl();
customer.get_bal();
console.log(customer.location)