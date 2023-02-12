const plus = (a,b) => a+b ;
function zipWith(fn,a0,a1) {
  let x = []
  for(let i=0;i<=a0.length; i++){
    x.push(fn(a0[i],a1[i]))
  }
  return x;
}
console.log((plus, [0,1,2,3,4,5], [6,5,4,3,2,1]), [6,6,6,6,6,6])

console.log(Math.pow(10,3))