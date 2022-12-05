let sum = 0
function persistence(num) {
  if( String(num).length <2){
    return sum +1
  }
  sum ++
  return(persistence(String(num).split('').filter(el=>el!=0).reduce((el, red) =>  el*red)))
}
console.log(persistence(6454474))
console.log(String(63).split('').reduce((el, red) => el!==0? el*red: red))