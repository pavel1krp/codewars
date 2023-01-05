

const sumTo = (x)=>{
  if(x===1){
    return x
  } return x+sumTo(x-1)
}
console.log(sumTo(100))

const factorial =(n)=>{
  if(n === 1){
    return n
  } return n*factorial (n-1)
}
console.log(factorial(5))