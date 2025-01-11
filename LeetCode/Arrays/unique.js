function checkifunque(num) {
  const strnum = num.toString();
  const unique = new Set(strnum);
  return strnum.length === unique.size;
}

const arr = [[80, 120]];
function countUniqueNumber(matrix) {
  // Return an array with all the unique numbers
  const result = matrix.map((range) => {
    const [n, m] = range;
    let count = 0;
    for (let i = n; i <= m; i++) {
      if (checkifunque(i)) {
        count++;
      }
    }
    return count;
  });
  const sumofunique = result.reduce((sum, acc) => sum + acc, 0);
  return sumofunique;
}
console.log(countUniqueNumber(arr));
