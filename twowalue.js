function alternate(n, firstValue, secondValue){
  const arr = []
 for(let i=0; i<n; i++ )
  {
    if(i%2===0){
      arr.push(firstValue)
    }else{arr.push(secondValue)}
    
  }
  return arr
}
alternate(5, true, false  )