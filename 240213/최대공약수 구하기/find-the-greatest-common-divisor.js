function div (x) {
    let arr = []
    for(let i = 1; i<=x; i++){
        if(x % i == 0) arr.push(i); 
    }
    return arr;
}

function gcd(n, m) {
    const nDiv = div(n);
    const mDiv = div(m);
    for(let i = nDiv.length-1; i>=0; i--){
        if(mDiv.includes(nDiv[i])){ 
            console.log(nDiv[i]);
            return;
        }
    }

}

gcd(12, 18);