function hasSurvived(attackers, defenders){
  let x = attackers.length/2
  for(let i = 0; i<attackers.length; i++){
    attackers[i] = defenders[i]-attackers[i]
  }
 return attackers
}
console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]))
