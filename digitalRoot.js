function arrayDiff(a, b) {
  for(let i = 0; i < a.length; i++){
    a = a.filter(el =>{
      for(let i = 0; i< b.length; i++){
        el = b[i]
      }
    })
  }
  return a
}
console.log(arrayDiff([-5,3,9,-11,1,11,15,18,-7],[-5,3,9,-11,1,11,15,18]))