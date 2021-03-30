class Bank{
    min_Bal = 500;
    constructor(acc_No, acc_Name, age){
        this.acc_No=acc_No;
        this.acc_Name=acc_Name;
        this.age=age;
    }

    get_Details(){
        console.log(`${this.acc_Name} account is created`)
    }

    get_Bal(){
        console.log(`${this.acc_Name} is having balance of ${this.min_Bal}`)
    }
}

let customer = new Bank(102, 'Abhishek', 24)
customer.get_Details();
customer.get_Bal();