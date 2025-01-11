/**
 Write a function to find the missing, number from a list: 
list = [1,2,3,5,6,7,8,9,10] missing 4


 Step 1 : find the expeced sum using Guass Formula:
 expectedsum = (n) * (n+1)/2 return what need to be exected
 actualsum = sum of elem in the list
 missing = expected - actualsum

 n = number of element in the array
 * */

//  Constand Time O(1)
function findMissing(arr) {
  let n = 10;
  const expected = n * ((n + 1) / 2);
  const actual = arr.reduce((sum, acc) => sum + acc, 0);
  return expected - actual;
}

const list = [1, 2, 3, 4, 5, 6, 7, 9, 10];
console.log(findMissing(list));

// linear Time:
