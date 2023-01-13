function comp(array1, array2){
  if( array1 == null ||  array2 == null ||  array1 == [] ||  array2 == []){
    return false
  }
  const newArray2= array2.map(el=>Math.sqrt(el)).sort((a,b)=>a-b)
  const newArray1 = array1.sort((a,b)=>a-b)
  console.log(newArray1)
  console.log(newArray2)
  for(let i =0; i<newArray1.length; i++){
    if(newArray1[i]!==newArray2[i]){
      return false
    }
  }
  return true
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11, 14641, 20736, 361, 25921, 361, 20736, 361]))