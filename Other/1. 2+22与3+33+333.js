// Input 1, Output 1
// Input 2, Output 2+22
// Input 3, Output 3+33+333

function x(n) {
  if(n === 1) return 1;
  if(n > 1) {
    var res = 0;
    var output = 0;
    for(var i=0; i<n; i++) {
        res += n * Math.pow(10, i);
        output += res;
    }
    return output
  }
}

console.log(x(1))