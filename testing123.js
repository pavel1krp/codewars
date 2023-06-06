const number = (arr)=>{
  if(!arr.length){
    return []
  }
  const newArr = []
  for(let i=0; i<arr.length; i++){
    newArr.push(`${i+1}: ${arr[i]}`)
  }
  return newArr
}