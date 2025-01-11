/**
 Given a 6 X6 2D Array, arr:
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0


An hourglass in A is a subset of values with indices falling in this pattern in this graphical representation:
a b c
  d
e f g


There are  16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values.
Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. 
The array will always be 6X6.

example:
arr = 
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
0  0  8  6 6 0
0  0  0 -2 0 0
0  0  1  2 4 0


 The 16 hourglass sums are:
-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
9,  17, 25, 18

The highest hourglass sum is  28 from the hourglass beginning at row 1, column 2:
0 4 3
  1
8 6 6
 * */

// Steps: Examine the hourgalss starting at the top left

const hourglass = (array2D) => {
  // i loop through outter array, j loop through inner array
  let max = -Infinity;
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      let abc = array2D[i][j] + array2D[i][j + 1] + array2D[i][j + 2]; //top row
      let d = array2D[i + 1][j + 1]; //middle
      let efg =
        array2D[i + 2][j] + array2D[i + 2][j + 1] + array2D[i + 2][j + 2]; //bottom row

      let currentHourglassSum = abc + d + efg;
      console.log(currentHourglassSum);
      max = Math.max(max, currentHourglassSum);
    }
  }
  return max;
};
//  Example array
arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglass(arr));
