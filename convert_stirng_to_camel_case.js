function toCamelCase(str){
 return str ===''? '': str.split('').
 map((el,i,arr)=> {
    if (arr[i-1] ==='_' ||arr[i-1] ==='-' ){
     return arr[i] = arr[i].toUpperCase()
    }
    return el = el
  } ).join('').replace(/[-_]/g,'')
}