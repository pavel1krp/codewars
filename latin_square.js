function makeLatinSquare(n) {
  let arr =[];
  for(let i=0;i<n;i++){
    arr.push([])
    for(let k=1;k<=n;k++){
      arr[i].push((k+i)%n+1)
    }
  } 
  return arr;
}
console.log(makeLatinSquare(4))