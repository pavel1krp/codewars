function positiveSum(arr) {
  let filtr = arr.filter(el => el> 0);
 if(filtr.length>0){
 return filtr.reduce((el, ell) => el+ ell)}
 return 0
}
console.log(positiveSum([2,4,5,67,4,1]))