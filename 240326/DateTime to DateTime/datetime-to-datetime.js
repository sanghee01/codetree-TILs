const [a,b,c] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

console.log((a*24*60 + b*60 + c)- (11*24*60 + 11*60 + 11));