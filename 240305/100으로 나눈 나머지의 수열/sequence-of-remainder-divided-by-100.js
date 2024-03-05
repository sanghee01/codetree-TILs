const fs = require("fs");
let number = Number(fs.readFileSync(0).toString().trim());

function getNum(a, b){
    number -= 1;
    if(number === 1) return b;
    return getNum(b, (a*b)%100);        
}

console.log(getNum(2, 4));