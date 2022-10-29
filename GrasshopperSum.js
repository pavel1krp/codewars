var summation = function (num) {
  let arr =[];
  for(let i = 0; i<num+1; i++){
    arr.push(i);
  }
  return arr.reduce((el,e)=> el+ e)
}

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result)