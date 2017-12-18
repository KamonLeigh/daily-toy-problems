/*
Array Quadruplet

Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

Explain and code the most efficient solution possible, and analyze its time and space complexities.

Example:

input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
                     # whose sum is 20. Notice that there
                     # are two other quadruplets whose sum is 20:
                     # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
                     # asked to return the just one quadruplet (in an
                     # ascending order)
Constraints:
[time limit] 5000ms
[input] array.integer arr
1 ≤ arr.length ≤ 100
[input] integer s
[output] array.integer
*/

/*
O: Array of nums who equal s
I: Array of numbers, Number
C: 
  Time: 
  Space:
E: 
  Examples:
  [] => []
  [2, 7, 4, 0, 9, 5, 1, 3], 20 => [0, 4, 7, 9]
  [2, 7, 4, 0, 9, 5, 1, 3], 100 => []
  [1, 2, 3], 6 => []
  [1, 2, 3, 4], 10 => [1, 2, 3, 4]
  [1], 1 => []

General Plan
Idea #1
  If length is less than 4, return empty array
  Sort array
  Iterate through array starting at 0 til array length
    Set diff1 equal to s minus array at i
    Iterate through array starting at i + 1 til array length
      Set diff2 equal to diff1 minus arr at j
      Iterate through array starting at j + 1 til array length
        Set diff 3 equal to diff2 minus arr at k
        Iterate through array starting at k + 1 til array length
          Set diff4 equal to diff3 minus arr at l
          If diff4 equals 0
            Return array with array at i, j, k and l
  Return empty array
*/

// function findArrayQuadruplet(arr, s) {
//   if (arr.length < 4) {
//     return [];
//   }
//   arr.sort();
  
//   for (let i = 0; i < arr.length; i++) {
//     let diff1 = s - arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       let diff2 = diff1 - arr[j];
//       for (let k = j + 1; k < arr.length; k++) {
//         let diff3 = diff2 - arr[k];
//         for (let l = k + 1; l < arr.length; l++) {
//           let diff4 = diff3 - arr[l];
//           console.log(diff1, diff2, diff3, diff4);
//           if (diff4 === 0) {
//             return [arr[i], arr[j], arr[k], arr[l]];
//           }
//         }
//       }
//     }
//   }
//   return [];
// }

// recursive?
// did not find fully recursive way yet
// function findArrayQuadruplet(arr, s) {
//   if (arr.length < 4) {
//     return [];
//   }
//   arr.sort();
  
//   const findNums = function(start, diff, count, ans) {
//     if (diff === 0 && count === 4) {
//       console.log('found ans', ans);
//       return ans;
//     } else if (count === 4) {
//       console.log('heading back up- the diff was ', diff)
//       return null;
//     }
//     for (let i = start; i < arr.length; i++) {
//       diff -= arr[i];
//       ans.push(arr[i]);
//       start++;
//       count++;
//       console.log(`start: ${start}, diff: ${diff}, count: ${count}, ans: ${ans}`);
//       let result = findNums(start, diff, count, ans)
//       if(result){
//         return result;
//       }
//       count--;
//       diff += arr[i];
//       ans.pop();
//     }
//     return [];
//     // return ans;
//   }

//   return findNums(0, s, 0, []);
// }

// console.log(findArrayQuadruplet([5, 4, 3, 2, 1], 10)); // [1, 2, 3, 4]
// console.log(findArrayQuadruplet([5, 4, 3, 2, 1], 11)); // [1, 2, 3, 5]
// console.log(findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20)); // [0, 4, 7, 9]
// // console.log(findArrayQuadruplet([1, 2, 3], 6)); // []
// // console.log(findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 100)); // []
