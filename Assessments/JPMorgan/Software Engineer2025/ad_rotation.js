/*
An e-commerce site has a series of advertisements to display. 
Links to the ads are stored in a data structure and they are displayed or not based on the value at a bit position in a number.
The sequence of ads being displayed at this time can be represented as a binary value, where 1 means the ad is displayed and 0 means it is hidden.
The ads should rotate, so on the next page load, ads that are displayed now are hidden and vice versa.
Given a base 10 integer representing the current display state of all ads, determine its binary representation.
 Starting from the position of its highest order 1 bit, negate that bit and all lower order bits from 0 to 1 or from 1 to 0. 
 Return the base 10 representation of the result.
Example:
base10 = 30
30 base 10 = 000111102
Strip the insignificant zeros then flip all of the bits
in 111102 to get 000012 = 110. The example
shows the value as an 8-bit binary to
demonstrate that preceding zeros are discarded.
Function Description
Complete the function changeAds in the editor below.
changeAds has the following parameter: int base10: an integer in base 10
*/

function changeAds(base10) {
  //Step1: Convert base 10 into binary representation
  let binary = base10.toString(2);
  //   console.log(binary);
  //Step2: Negiate each bit
  const flippedBit = binary
    .split("")
    .map((elem) => (elem == "0" ? 1 : "0"))
    .join("");
  //   console.log(flippedBit);
  const result = parseInt(flippedBit, 2);
  return result;
}

console.log(changeAds(30));
