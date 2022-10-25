function sumEvenNumbers(input) {
  console.log(input)
 let x = input.filter(el => el%2 ==0)
 console.log(x)
 return x.reduce((a,b) => a+b)
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))