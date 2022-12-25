const repeatString = (str, number, div)=>{
  let answ = '';
  for(let i = 0; i< number; i++){
    answ += str+div
  }
  return answ
}
const repeatString2 = (str, number, div)=>{
  return (str+div).repeat(number)
  
}
const checkStart = (str, x)=>{
  return str.toUpperCase().startsWith(x.toUpperCase())
}
console.log(checkStart("Incubator", "inc"))