class Address{
    constructor(address){
        this.address = address
    }
    static detail(){
        console.log('Hello')
    }
}
class Customer extends Address{
    constructor(x,y,z){
        super(Address)
        this.x =x;
        this.y = y;
        this.z= z;
    }
/*     static detail(){
        console.log('Hello')
    } */

}


let a = new Customer(101,'Abhishek',4000, {area:'Bangalore'})
console.log(a)
/* Customer.detail() */
Address.detail()