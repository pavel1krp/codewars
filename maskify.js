function maskify(cc) {
  cc = cc.split('');
  for(let i = 0; i< cc.length-4; i++){
    cc[i] = '#'
  }
  return cc.join('')
}
console.log(maskify('12412343413123'))