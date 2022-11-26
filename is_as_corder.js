function inAscOrder(arr) {
    let arr1 =[...arr]
    arr = arr.sort((a,b) =>a-b)
    arr = arr.map(a => a.toString()).join('')
    arr1 = arr1.map(a => a.toString()).join('') 
    console.log(arr1)
    console.log(arr)
    return arr1 === arr
}
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))