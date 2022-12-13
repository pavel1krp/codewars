// function numberJoy(n) {
//   let newN = String(n).split('').reduce((a,b)=>Number(a)+Number(b))
//   newN1 = String(newN).split('').reverse().join('')
//   return newN * newN1 === n
// }

const buble = (arr)=>{
  for(let i =0; i<arr.length-1; i++){
    for(let k =0; k<arr.length-1-i;k++){
      if(arr[k]>arr[k+1]){
        [arr[k], arr[k+1]] = [arr[k+1], arr[k]]
      }
    }
  }
  return arr
}
console.log(buble([2,4,1,34231,211]))