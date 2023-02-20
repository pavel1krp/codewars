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

const str = ['a','b','2','W','w','C']

function filt(){
  return str.filter(el => el.toUpperCase() == el)
}
console.log(filt(str))