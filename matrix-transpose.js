function transpose(matrix) {
  const newMatrix = []
  for(let i = 0; i<matrix[0].slice().length;i++){
    let newArr =[]
    for(let k = 0; k<matrix.slice().length; k++){
      newArr.push(matrix[k][i])
    }
    newMatrix.push(newArr)
  }
  return newMatrix
}
console.log(transpose([[1,2,3],[4,5,6]]))