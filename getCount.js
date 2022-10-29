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

function getCount1(str){
  let res = str.toLowerCase().match(/[aeiou]/gi);
  if (!res){
    return 0
  }
  return res.length
}
console.log(getCount1('ssss'))
