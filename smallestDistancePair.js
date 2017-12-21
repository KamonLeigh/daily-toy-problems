/*
Given an integer array, return the k-th smallest distance among all the pairs. The distance of a pair (A, B) is defined as the absolute difference between A and B.

Example 1:
Input:
nums = [1,3,1]
k = 1
Output: 0 
Explanation:
Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.
Note:
2 <= len(nums) <= 10000.
0 <= nums[i] < 1000000.
1 <= k <= len(nums) * (len(nums) - 1) / 2.
*/

/*
O: Number
I: Array of Numbers (int), Number
C:
  Time:
  Space:
E:
  [1, 3, 1]
    (1,3) -> 2  k = 0 
    (1,1) -> 0  k = 1 
    (3,1) -> 2  k = 2 

  [1, 5, 7, 9]
    (1, 5) -> 4  k = 0
    (1, 7) -> 6  k = 1
    (1, 9) -> 8  k = 2
    (5, 1) -> 4  k = 3
    (5, 7) -> 2  k = 4
    (5, 9) -> 4  k = 5
    (7, 1) -> 6  k = 6
    (7, 5) -> 2  k = 7
    (7, 9) -> 2  k = 8
    (9, 1) -> 8  k = 9
    (9, 5) -> 4  k = 10
    (9, 7) -> 2  k = 11

General Plan
Idea #1 Arrays
  Create difference array that is empty
  Iterate through given array starting at i equal to 0 til array's length
    Iterate through given array starting at j equal to 0 til array's length
      If i equals j
        Continue
      Push the absolute value of array at i minus array at j to difference
  Return difference at k

Idea #2 Array
  Create counter set to 0
  Iterate through given array starting at i equal to 0 til array's length
    Iterate through given array starting at j equal to 0 til array's length
      If i equals j OR array at i equals array at j
        Continue
      If counter equals k
        Return the absolute value of array at i minus array at j
      Increment counter
  Return null if never got to k

Idea #3 Array 
  Create counter set to 0
  Iterate through given array starting at i equal to 0 til array's length
    Iterate through given array starting at j equal to 0 til array's length
      If array at i equals array at j
        Continue
      If counter equals k
        Return the absolute value of array at i minus array at j
      Increment counter
  Return null if never got to k

Idea #4 Set
  Create Set s using the array
  Create counter set to 0
  Iterate through s, let i
    Iterate through s, let j
      If i equals j
        continue
      If counter equals k
        Return the absolute value of i minus j
      Increment counter
  Return null if never got to k
*/

var smallestDistancePair = function(nums, k) {
  const s = new Set(nums);
  let counter = 0;

  for (let i of s.keys()) {
    for (let j of s.keys()) {
      if (i === j) continue;
      if (counter === k) return Math.abs(i - j);
      counter++;
    }
  } 
  return null;
};

console.log(smallestDistancePair([1, 5, 7, 9], 0));  // 4
console.log(smallestDistancePair([1, 5, 7, 9], 1));  // 6
console.log(smallestDistancePair([1, 5, 7, 9], 2));  // 8
console.log(smallestDistancePair([1, 5, 7, 9], 3));  // 4
console.log(smallestDistancePair([1, 5, 7, 9], 4));  // 2
console.log(smallestDistancePair([1, 5, 7, 9], 5));  // 4