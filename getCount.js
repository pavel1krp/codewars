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
// console.log(getCount('abracadabra'))

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result)

function getCount1(str){
  let res = str.toLowerCase().match(/[aeiou]/gi);
  if (!res){
    return 0
  }
  return res.length
}
console.log(getCount1('ssss'))
