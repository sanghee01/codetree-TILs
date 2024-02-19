const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function isAllEqual(a){
    if(a[0] !== a[1]) return false;
    return true;
}

if(isAllEqual(input)){
    console.log("No");
}else{
    console.log("Yes");
}