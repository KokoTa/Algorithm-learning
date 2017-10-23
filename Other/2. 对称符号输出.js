// *
// ***
// *****
// *******
// *********
// *******
// *****
// ***
// *

function x(n) {
  var res = '*';
  
  for(var i=1; i<n; i++) {
    console.log(res);
    res += '**'
  }
  
  console.log(res);
  
  for(var i=n-1; i>=1; i--) {
    console.log(res.slice(0, i*2-1));
  }
  
}

x(5)