let item = [[0,1], [2,3], [4,5]];
let sum = 0;

for(let i =0; i<=item.length-1;i++){
    item[i].forEach(element=>{
        sum = sum + element;
    });
}
console.log(sum);