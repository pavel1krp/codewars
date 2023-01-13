function order(words){
    let arr = words.split(' ');
    let a ='';
    let b ='';
    let c ='';
    let d ='';
    let e ='';
    let f ='';
    let g ='';
    let h ='';
    let j ='';
   for(let i = 0; i< arr.length; i++){
    if(arr[i].includes('1')){a+= arr[i]+' '}
    if(arr[i].includes('2')){b+= arr[i]+' '}
    if(arr[i].includes('3')){c+= arr[i]+' '}
    if(arr[i].includes('4')){d+= arr[i]+' '}
    if(arr[i].includes('5')){e+= arr[i]+' '}
    if(arr[i].includes('6')){f+= arr[i]+' '}
    if(arr[i].includes('7')){g+= arr[i]+' '}
    if(arr[i].includes('8')){h+= arr[i]+' '}
    if(arr[i].includes('9')){j+= arr[i]+' '}
   }
   return (a+b+c+d+e+f+g+h+j).slice(0, -1)
}
console.log(order("is2 Thi1s T4est 3a"))
