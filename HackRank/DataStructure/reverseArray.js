/**
 An array is a type of data structure that stores elements of the same type in a contiguous 
 block of memory. In an array, , of size , each memory location has some unique index, 
  (where ), that can be referenced as  or .

Reverse an array of integers.

Example
A = [1,2,3]
Return [3,2,1]

Function Description

Complete the function reverseArray in the editor below.

reverseArray has the following parameter(s):

int A[n]: the array to reverse
Returns

int[n]: the reversed array
Input Format

The first line contains an integer, , the number of integers in .
The second line contains  space-separated integers that make up .

Constraints


 * */

const reverseArray = (array) => {
  if (array.length == 0) {
    return array;
  }
  return array.reverse();
};
let A = [1, 2, 3];
console.log(reverseArray(A));

const reverseArray2 = (array) => {
  if (array.length == 0) {
    return array;
  }
  let reverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
};
let B = [4, 5, 6];
console.log(reverseArray2(B));
