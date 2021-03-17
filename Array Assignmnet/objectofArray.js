let object = [
    {a:6, b:7},
    {a:7, b:9},
    {a:1, b:5}
]

var result = object.filter(obj => {
    return obj.b ===9
})

console.log(result)