function isExist(m, d){
    let answer = "No"
    const date = [[1,31],[2,28],[3,31],[4,30],[5,31],[6,30],[7,31],[8,31],[9,30],[10,31],[11,30],[12,31]];
    if(date[m-1][1] >= d) answer="Yes";
    
    return answer;
}

const fs = require("fs");
const [m, d] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
console.log(isExist(m, d));