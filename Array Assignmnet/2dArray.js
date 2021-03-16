var item = [[0,1,2,],[3,4,5],[6,7,8]], arrtext=' '
console.log(item[0][1])
console.log(item[2][1])

for(let i=0;i<item.length;i++){
    for(let j=0;j<item[i].length;j++){
        arrtext+=item[i][j]+' '
    }
    console.log(arrtext)
    arrtext=' '
}
