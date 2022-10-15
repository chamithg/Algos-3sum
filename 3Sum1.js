/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Input: nums = [-1, 0, 1, 2, -1, -4];
// Output: [
//   [-1, -1, 2],
//   [-1, 0, 1],
// ];

//faster solution.
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  output = [];

  for (let x = 0; x < nums.length; x++) {
    if (x > 0 && nums[x] == nums[x - 1]) {
      continue;
    }
    let leftPointer = x + 1;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      let sumOfThree = nums[x] + nums[leftPointer] + nums[rightPointer];
      if (sumOfThree > 0) {
        rightPointer--;
      } else if (sumOfThree < 0) {
        leftPointer++;
      } else {
        let temp = [nums[x], nums[leftPointer], nums[rightPointer]];
        output.push(temp);

        while (
          nums[leftPointer] === nums[leftPointer + 1] &&
          leftPointer < rightPointer
        ) {
          leftPointer++;
        }
        while (
          nums[rightPointer] === nums[rightPointer - 1] &&
          leftPointer < rightPointer
        ) {
          rightPointer++;
        }

        leftPointer++;
        rightPointer--;
      }
    }
  }

  return output;
}

let nums = [-1, 0, 1, 2, -1, -4];
let nums1 = [-1, 0, 0, 1];
let nums2 = [-1, -1, -2, -3, -4, 0, 0, 1, 2, 3, 4];
let nums3 = [
  34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57,
  -6, 86, 56, 94, 74, 83, -14, 28, -66, 46, -49, 62, -11, 43, 65, 77, 12, 47,
  61, 26, 1, 13, 29, 55, -82, 76, 26, 15, -29, 36, -29, 10, -70, 69, 17, 49,
];

console.log(threeSum(nums3));

//
[
  [-3, -1, 4],
  [-2, -1, 3],
];

[[-6, -49, 55]];

[
  [-82, -11, 93],
  [-70, -14, 84],
  [-66, -11, 77],
  [-49, 2, 47],
  [-43, -14, 57],
  [-43, -6, 49],
  [-29, 12, 17],
  [-14, -3, 17],
  [-14, 1, 13],
  [-11, -6, 17],
  [-11, 1, 10],
];
