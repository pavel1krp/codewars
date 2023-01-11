// let sum = 0
// function persistence(num) {
//   if( String(num).length <2){
//     return sum +1
//   }
//   sum ++
//   return(persistence(String(num).split('').filter(el=>el!=0).reduce((el, red) =>  el*red)))
// }
function persistence(num) {
  let sum = 0;
  while(num.toString().length > 1){
    num = num.toString().split('').reduce((a,b)=>a *b,1)
    sum++
  }
  return sum
}
console.log(persistence(999))