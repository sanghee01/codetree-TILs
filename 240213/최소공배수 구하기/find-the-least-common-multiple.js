function findLCM (n, m){
    let lcm = 1;
    for(let i =1; i <= Math.min(n,m); i++){
        if(n%i === 0 && m%i === 0) lcm *=i;
    }
    if(n === 1 || m === 1){
        console.log(Math.max(n,m))
    }else{
         console.log(lcm);
    }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [n, m] = input.map(Number);
findLCM(n, m);