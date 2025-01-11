/*
Given a range of integers, determine how many numbers have no repeating digits.
Example 
n=80
m=120
The lower and upper bounds are inclusive, so there are 120-79=41 values in the range. 
Numbers without repeating characters are normal weight and others are bold. 
The two columns to the right are the valid number counts per row (normal weight) and invalid number counts (bold).
*/

function hasUniqueDigits(num) {
  const numStr = num.toString();
  const uniquenum = new Set(numStr);
  return uniquenum.size === numStr.length;
}

function countNumbers(arr) {
  let result = arr.map((range) => {
    const [n, m] = range;
    let count = 0;
    for (let i = n; i <= m; i++) {
      if (hasUniqueDigits(i)) {
        count++;
      }
    }
    return count;
  });
  const sum = result.reduce((sum, count) => sum + count, 0);
  return sum;
}

// Example usage
const arr = [[80, 120]];

console.log(countNumbers(arr)); // Output: 27

let n = 88;
let strNum = n.toString();
console.log(strNum);

let uniq = new Set(strNum);
console.log(uniq);
