function isPangram(string){
  let arr = string.toLowerCase().split('')
  return arr.filter((item,pos)=> arr.indexOf(item)===pos ).filter(el=>el!==' ').join('').replace(/[^a-z]/gi, '').length ===26
}