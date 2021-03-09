let sum=0
let num=345
let temp=num
while(temp>0){
    let rem=temp%10
    sum+= rem * rem * rem
    temp=parseInt(temp/10)
}
if(sum == num){
    console.log(num, "is a Amstrong")
}
else{
    console.log(num, "is not a Armstrong")
}
