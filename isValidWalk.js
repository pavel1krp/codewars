function isValidWalk(walk) {
  let w = walk.filter(el => el ==='w');
  let n = walk.filter(el => el ==='n');
  let e = walk.filter(el => el ==='e');
  let s = walk.filter(el => el ==='s');
  if(w.length === e.length && n.length === s.length &walk.length ===10){
   return true
  } return false
}
console.log(isValidWalk(['s','s','n','s','n','s','n','s','n','s']))