const repeatString = (str, number, div)=>{
  let answ = '';
  for(let i = 0; i< number; i++){
    answ += str+div
  }
  return answ
}
const repeatString2 = (str, number, div)=> (str+div).repeat(number)
  
const checkStart = (str, x)=>str.toUpperCase().startsWith(x.toUpperCase())

const truncateString =(str, number)=>  str.slice(0,number) + '...'

