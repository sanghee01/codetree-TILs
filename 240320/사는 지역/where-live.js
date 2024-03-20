const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0])
input.shift();

class human {
    constructor(name = 0, code = 0, city = 0){
        this.name = name;
        this.code = code;
        this.city = city;
    }
}

const humans = Array(n).fill(new human()) 

for(let i = 0; i < n; i++){
    let [name, code, city] = input[i].split(" ");
    humans[i] = new human(name, code, city);
}

const lastHuman = humans.sort().reverse()[0];

console.log(`name ${lastHuman.name}`);
console.log(`addr ${lastHuman.code}`);
console.log(`city ${lastHuman.city}`);