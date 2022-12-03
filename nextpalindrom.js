function nextPal(val) {
  for(let i = val+1; i<=val+99999; i++){
    if(Number(String(i).split('').reverse().join('')) == i){
      return i
    }
  } }