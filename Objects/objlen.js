// Object length using object.key

const exampleObjects = {
    name: 'Abhishek',
    age: 23,
    location: "blore"
}
console.log(Object.keys(exampleObjects).length);

console.log("--------------VS--------------")
//object length using for..in loop

let count = 0
for(let key in exampleObjects){
    count++
}
console.log(count);