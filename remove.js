function removeEveryOther(arr){
  let filtr = arr.filter((el, i) => i%2 == 0)
  return filtr
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))