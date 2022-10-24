function points(games) {
  let sum = 0;
  for( let i = 0; i<= games.length-1; i++){
    let x = games[i].split(':');
    if( x[0] > x[1]){
      sum += 3;
    } else if(x[0] === x[1] ){
      sum += 1;
    }else{
      sum+= 0;
    }
    
  }
  return sum;
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))