var isAnagram = function(test, original) {
 let arr1 = test.toLowerCase().split('').sort()
 let arr2 = original.toLowerCase().split('').sort()
 console.log(arr1, arr2)
 return arr1.join('') === arr2.join('')
 
};
;
isAnagram("foefet", "toffee")
