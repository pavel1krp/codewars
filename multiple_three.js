const prevMultOfThree = n => {
  if(n%3 === 0 ){
    return  typeof n == Number || typeof n == String? Number(n): n.join('')
  } else{
    let arr = String(n).split('')
    return prevMultOfThree(arr.splice(0,arr.length-1))
  }
}
console.log(prevMultOfThree(3))
// console.log(2)