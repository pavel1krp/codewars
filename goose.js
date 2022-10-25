let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));
function duckDuckGoose(players, goose) {
 if (goose>players.length){
   goose = goose%players.length*goose;
   return players[goose]
  }
  return players[goose]
}
console.log(duckDuckGoose(players, 1))