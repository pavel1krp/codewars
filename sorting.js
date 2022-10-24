function sortDict(dict) {
  let arr = [];    
  for (key in dict){
    let x = [];
    
      x.push((key));
      x.push(dict[key]);
      arr.push(x);
  }

  let x =arr.sort((a,b)=> b[1]-a[1]);
   for(let i= 0; i< x.length; i++){
    if(parseInt(x[i][0]) == x[i][0]){
      x[i][0]= parseInt(x[i][0]);
    } else{
      x[i][0]= x[i][0];
    }
  }
 return x;
}
console.log(sortDict({1:6,'boris':2,'igor':6}))