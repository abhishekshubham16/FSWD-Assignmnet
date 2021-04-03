class Address{
    constructor(address){
        this.address= address;
    }
}

class Bank_Customer extends Address{
    constructor(acc_No, acc_Name,amount,address){
        super(address);
        this.acc_No= acc_No;
        this.acc_Name= acc_Name;
        this.amount= amount;
    }
    getName(){
        console.log(this.address.location)
    }
}

let b1 = new Bank_Customer(101,'Abhishek', 4000, {area: 'RJ Garden', location:'Bangalore'})
/* console.log(b1.address.area)
b1.getName() */
console.log(b1);