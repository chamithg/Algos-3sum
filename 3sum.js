/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Input: nums = [-1, 0, 1, 2, -1, -4];
// Output: [
//   [-1, -1, 2],
//   [-1, 0, 1],
// ];

// thripple for loops. TC is n^4
// hard to remove duplicates.

function threeSum(nums) {
  let output = [];

  for (let x = 0; x < nums.length; x++) {
    let y = x + 1;
    for (y; y < nums.length; y++) {
      let z = x + 2;
      for (z; z < nums.length; z++) {
        if (nums[x] + nums[y] + nums[z] === 0) {
          let temp = [nums[x], nums[y], nums[z]].sort();
          output.push(temp);
        }
      }
    }
  }

  return output;
}

let nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
