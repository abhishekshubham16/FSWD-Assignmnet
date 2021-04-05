let size = [32,34,36]
let size1 = [38,40,42]

for(let i=0;i<size1.length;i++){
    size.push(size1[i])
}

console.log(size)
size[0] = 31
console.log(size)
console.log(size1)