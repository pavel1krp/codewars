function getCount(str) {
  let letter =['a','e','i','o','u'];
  let sum = 0;
  for(let i of str.toLowerCase()){
    if(letter.includes(i)){
      sum ++;
    }
  }
  return sum;
}
console.log(getCount('abracadabra'))