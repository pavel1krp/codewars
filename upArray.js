function upArray(arr){
  for(let i = 0; i< arr.length; i++){
    if (arr[i]<0 || arr[i]> 9){
      return null
    }
  }
  for(let i = arr.length; i> 0; i--){
    
  }
  // str = arr.join('');
  // console.log(str);
  // str = (str *1 +1).toString().split('').map(el => parseInt(el));
  // str = (str *1 +1)
  // console.log(str);
  // if(arr[0]=== 0){
  //   str.unshift(0)
  // }
  arr[arr.length-1]= arr[arr.length-1]+1
  return arr
}
console.log(upArray([1,6,3,1,7,4,9,4,9,8,2,3,5,7,9,5,2,3,1,6,3,4,7,1,9,5,7,0]))