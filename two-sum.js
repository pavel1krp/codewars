const min = (arr)=>{
  arr= arr.sort((a,b)=>a-b)
  return arr[0]
}
console.log( min([3,5,6,1,2]))