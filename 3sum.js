/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const { faEquals } = require("@fortawesome/free-solid-svg-icons");

//Input: nums = [-1, 0, 1, 2, -1, -4];
// Output: [
//   [-1, -1, 2],
//   [-1, 0, 1],
// ];
function threeSum(nums) {
  let output = [];
  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

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

  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < output.length; j++) {
      if (JSON.stringify(output[i]) === JSON.stringify(j)) {
        o;
      }
    }
  }
}

nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
