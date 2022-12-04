function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((el, reducer)=> el == true? reducer+ el: reducer+0 )
 }