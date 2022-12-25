const repeatString = (str, number, div)=>{
  let answ = '';
  for(let i = 0; i< number; i++){
    answ += str+div
  }
  return answ
}
console.log(repeatString("yo", 3, ","))