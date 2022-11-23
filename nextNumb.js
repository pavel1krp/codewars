function nextNumb(val) { 
  if(val>9999999998){return "There is no possible number that fulfills those requirements"}
  let x = String(val).split('')
  for(let i = val+1; i<=val+999999; i++){
    let y = String(i).split('').filter((item, pos,arr)=> arr.indexOf(item) ===pos)
    if(i%3 ===0 && i%2!== 0 && y.length == String(i).length){
      return i
    }
  }
}