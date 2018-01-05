/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/*
O: Array of arrays
I: Array
C:
  Time: Quadratic
  Space: 
E:

Input: [1,2,3]
Output: [
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

Input: [0]
Output: [ 
  [0] 
]

Input: [0,1]
Output: [
  [0,1],
  [1,0]
]

General Plan:
  Create result as empty array

  Create subroutine getPerms that takes in arr, subArr initialized as empty array
    If arr is empty
      Push subArr to arr
      Return
    Loop through arr
      Call getPerms with arr.slice(0, i) + arr.slice(i + 1), subArr push arr at i
  Call getPerms sending in nums
  Return result  
*/

var permute = function(nums) {
    
};
