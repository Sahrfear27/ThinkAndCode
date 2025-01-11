/**
 * For two positive integers, lo and hi, and a limit k, find two integers, a and b, satisfying the following criteria. Return the value of a o b. The o symbol denotes the bitwise XOR operator.
• lo ≤a <b≤ hi
• The value of a e bis maximal for a o b ≤ k.
Example
10 = 3
hi = 5
k=6：

The maximal useable XORed value is 6 because it is the maximal
value that is less than or equal to the limit k = 6.
Function Description
Complete the function maxXor in the editor below. The function must return an integer denoting the maximum possible value of a o bfor all a o b≤ k.
 * 
 * lo<= a <
 * Function Description
Complete the function maxxor in the editor below. The function must return an integer denoting the maximum possible value of a obfor all a obsk.
maxxor has the following parameters): int lo: an integer int hi: an integer
k: an integer
Constraints
• 1510 < hi≤ 104
• 15k≤ 104
• Input Format for Custom Testing
Input from stdin will be processed as follows and passed to the function.
The first line contains an integer, lo, the lower range limit.
The second line contains an integer, hi, the upper range limit.
The third line contains an integer, k, the maximal limit.
 * */
