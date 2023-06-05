function mygcd(x,y){
  while(x!= 0 &  y!=0 ){
    if(x>y){
      x = x%y
    }else{ y= y%x}
    console.log(x,y)
  }
  return Math.max(x,y)
}
