function xyz(x, y, ...z) {
    console.log(x, '', y); // hey hello
  
    console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
    console.log(z[0]); // wassup
    console.log(z.length); // 4
  }
  
  xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")