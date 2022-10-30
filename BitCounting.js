var countBits = function(n) {
  n = n.toString(2);
let x = n.match(/1/g)

return x? x.length: 0;
};