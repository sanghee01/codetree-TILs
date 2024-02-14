function isInARow(a, b){
    let answer = "Yes";
    const start = a.indexOf(b[0]);
    for(let i = 0; i < b.length; i++){
        if(b[i] !== a[start+i]) answer="No";
    }

    return answer;
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = [input[1].split(" ").map(Number), input[2].split(" ").map(Number)];
console.log(isInARow(a, b));