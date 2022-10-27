function spinWords(string){
  arr =string.split(' ');
  for( let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split('');
  }
  for( let i = 0; i < arr.length; i++){
    if(arr[i].length > 4){
    arr[i] = arr[i].reverse()}
  }
  for( let i = 0; i < arr.length; i++){
    arr[i] = arr[i].join('')
  }
  return arr.join(' ')
}
console.log(spinWords("Hey fellow warriors"))
// let xxx =[ 'f', 'e', 'l', 'l', 'o', 'w' ]
// console.log(xxx.reverse())