function vowelOne(s){
  let arr = [];
 s = s.toLowerCase(); 
 const non_vowels = ['a','e', 'i', 'o','u', ]
 // const vowels = [ 'b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
 for(let char of s){
     if(non_vowels.includes(char)){
         arr.push(1)
     }
     else{
         arr.push(0)
     }
 }
 arr = arr.join('');
 return String(arr);
 }