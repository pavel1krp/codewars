function inAscOrder(arr) {
    let arr1 =[...arr]
    arr = arr.sort((a,b) =>a-b)
    arr = arr.map(a => a.toString()).join('')
    arr1 = arr1.map(a => a.toString()).join('') 
    console.log(arr1)
    console.log(arr)
    return arr1 === arr
}