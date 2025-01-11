/**
The owner of HackerMall loves organized items. A row of items is organized if the parity (even or odd) is different for each adjacent stack of items.

To organize the row, half of the items in any stack can be removed. This can happen as many times and on as many stacks as is required.
Determine the minimum number of operations needed to organize a row.

More formally, given an array items] of integer of length n, the array is organized if for each x less than n- 1, items[x] mod 2!= items[x + 1] mod 2. A mod B is the remainder of A divided by B. In one operation, the owner can choose an element and divide it by 2. That is, if one
chooses index x then do items[x] = floor items[x] / 2).
The goal is to return the minimum number of operations that one needs to perform to organize the array.
Example
items = [4, 10, 10, 6, 2]
The array is not organized since, for example, items[2]
mod 2 = items[3] mod 2.
One way to organize the array is shown using 1-based indexing.
1. Choose the 2nd index and divide it by 2; the new array is [4, 5, 10, 6, 2].
2. Choose the 4th index and divide it by 2; the new array is [4, 5, 10, 3, 2].
[4, 5, 10, 3, 2] is an organized array so return the number of operations, 2.


Function Description
Complete the function getMinimumOperations in the editor below.
getMinimumOperations has the following parameters):
int items[n]: a row of stacks of items
Returns
int: the minimum number of operations needed to organize the array
Constraints
• 1 ≤n≤ 105
• 1 ≤ itemsli]< 230






Steps:
To solve this problem, we need to make the array "organized," where no two consecutive elements have the same parity (even or odd)
.We can achieve this by dividing elements by 2 to change their parity.

1. Parity Check:
    An integer is even if it is divisible by 2 (i.e., item % 2 == 0).
    An integer is odd if it is not divisible by 2 (i.e., item % 2 != 0).

2. Operations:
    In one operation, we can divide an element by 2, effectively changing its parity if necessary.
3. Goal:
    We need to ensure the sequence alternates in parity. This means items[i] % 2 != items[i + 1] % 2 for all valid indices i.
 * */

// function getMinimumOperations(items) {
//   let numberOfOperations = 0;

//   for (let i = 1; i < items.length; i++) {
//     // While the current and previous items have the same parity
//     while (items[i] % 2 === items[i - 1] % 2) {
//       // Divide the current item by 2
//       items[i] = Math.floor(items[i] / 2);
//       numberOfOperations += 1;

//       // If the current item becomes 0, break to avoid infinite loop
//       if (items[i] === 0) {
//         break;
//       }
//     }
//   }

//   return numberOfOperations;
// }

// // Example usage:
// let items = [5, 4, 10, 10, 6, 3];
// console.log(getMinimumOperations(items)); // Expected output: 3
// function getMinimumOperations(items) {
//   let numberOfOperations = 0;

//   for (let i = 1; i < items.length; i++) {
//     // Check if the current item has the same parity as the previous one
//     while (items[i] % 2 === items[i - 1] % 2) {
//       // Divide the current item by 2
//       items[i] = Math.floor(items[i] / 2);
//       numberOfOperations += 1;

//       // If the item becomes zero, we can't divide anymore
//       if (items[i] === 0) {
//         break;
//       }
//     }
//   }

//   return numberOfOperations;
// }

// // Example usage:
// let items = [5, 4, 10, 10, 6, 3];
// console.log(getMinimumOperations(items)); // Expected output: 3
function getMinimumOperations(items) {
  let numberOfOperations = 0;

  // Loop through the items array starting from the second element
  for (let i = 1; i < items.length; i++) {
    // While the current item and the previous item have the same parity
    while (items[i] % 2 === items[i - 1] % 2) {
      // Divide the current item by 2
      items[i] = Math.floor(items[i] / 2);
      numberOfOperations += 1;

      // If the item becomes zero, we can't divide anymore
      if (items[i] === 0) {
        break;
      }
    }
  }

  return numberOfOperations;
}

// Example usage:
let items = [5, 4, 10, 10, 6, 3];
console.log(getMinimumOperations(items)); // Expected output: 3
