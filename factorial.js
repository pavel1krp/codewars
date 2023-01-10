function factorial(n){
  let res = 1;
  for(let i=1;i<=n; i++ ){
    res *= i
  }
  return res
}
const factorial1 =(n)=>{
  if(n === 1){
    return n
  } return n*factorial (n-1)
}

const array = [333, [222,[444,[985]]]]
let a = []
console.log(a.length)
console.log(array.join())
console.log(array.length)
const f = (arr)=>{
  for(let i= 0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      return f(arr.join())
    } return arr
  }
}
console.log(f(array))