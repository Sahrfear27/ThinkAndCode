/**
 * A company has invented a new type of printing technology—a circular printer that looks like this:

It is a circular printer wheel with the letters A through Z in sequence. It wraps so A and Z are adjacent. The printer has a pointer that is initially at 'A'.
 Moving from any character to any adjacent character takes 1 second. It can move in either direction. Given a string of letters, what is the minimum time needed
  to print the string? (Note:
Assume that printing does not take any time. Only consider the time it takes for the pointer to move.)
Example
s= "BZA"
Total time
to print "BZA" = 1+2 + 1 = 4 seconds
First, move the pointer from 'A' to 'B' (1 second), then from
'B' to 'Z' (2 seconds), and finally from 'Z' to 'A' (1 second).
So the minimum time needed to print "BZA" is 4 seconds.
Function Description
Complete the function getTime in the editor below.
getTime has the following parameter:
string 5: the string of characters that need to be printed
Returns:
int: the minimum number of seconds needed to print s
Constraints
• 1 ≤ length of s ≤ 105
 * */

function getTime(s) {
  // Write your code here
  let timetaken = 0;
  let currentPosition = "A".charCodeAt(0);
  for (let char of s) {
    let targetChar = char.charCodeAt(0);
    // console.log(targetChar);
    let clockwise = Math.abs(targetChar - currentPosition);
    // total char is 26
    let counterClockwise = 26 - clockwise;

    timetaken += Math.min(clockwise, counterClockwise);
    currentPosition = targetChar;
  }
  return timetaken;
}

// Example usage
console.log(getTime("BZA")); // Output: 4
