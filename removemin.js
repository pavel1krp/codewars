function removeSmallest(numbers) {
  let number = [...numbers];
  let number1 = [...numbers];
  let sorted = number.sort((a,b) => a-b);
  const x = sorted[0];
  let xx = numbers.indexOf(x);
  let numbers2 = number1.splice(xx,1)
  return number1
}
console.log(removeSmallest([5, 3, 2, 1,5, 4]))