const plus = (a,b)=> a+b
function zipWith(fn,a0,a1) {
  let x = []
  const min = Math.min(a0.length, a1.length)
    for(let i=0;i<min; i++){
      x.push(fn(a0[i],a1[i]))
    }
    return x;
 }