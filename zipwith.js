const plus = (a,b)=> a+b
function zipWith(fn,a0,a1) {
  let x = []
  const min = Math.min(a0.length, a1.length)
    for(let i=0;i<min; i++){
      x.push(fn(a0[i],a1[i]))
    }
    return x;
  }
console.log(zipWith(plus,[0,1,2,3,4,5], [6,5,4,3,2,1] ))

console.log(Math.pow(10,3))