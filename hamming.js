function hamming(a,b) {
  let x = 0
	for(let i=0; i<a.length;i++ ){
    if(a[i]!==b[i]){
      x+=1
    }
  }
  return x
}