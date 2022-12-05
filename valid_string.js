var validWord = function(dictionary, word) {
  dictionary = dictionary.join().split('').sort();
  word = word.split('').sort();
  console.log(dictionary)
  console.log(word)
let  answ =  dictionary.filter(el => !word.includes(el))
return answ.filter((el,i) => answ.indexOf(el) == i ).length > 1? false:true
}
;

console.log(validWord( ['Star', 'Code', 'Wars'], 'StarCodeWar'))