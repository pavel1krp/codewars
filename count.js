function countPositivesSumNegatives(input) {
  console.log(input)
  if(input == null || input.length ===0){
    return []
  }{
let pos = input.filter(el => el>0);
let neg = input.filter(el => el<0);
let sum = neg.reduce((a,b)=> a+b)
return [pos.length, sum]}
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))