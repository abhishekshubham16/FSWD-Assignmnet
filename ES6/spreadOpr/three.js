let employee = {
    name:'Abhishek',
    age: 23,
    location: 'bangalore',
    email:'abhishek@gmail.com'
    
}

let newEmployee = {...employee,yop:2020}

console.log(newEmployee)
console.log(employee)

 /* for(emp in employee){
    console.log(Object.keys(emp))
} */

/* console.log(Object.keys(employee.name))  */