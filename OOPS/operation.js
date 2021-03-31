class Operation{
    constructor(acc_Name, amount){
        this.acc_Name= acc_Name;
        this.amount= amount;
    }

/*     get_Bal(){
        console.log(`${this.acc_Name} is having balance of amount Rs. ${this.amount}`)
    } */

}

let opr = new Operation('Abhishek', 7000)

module.exports = Operation

