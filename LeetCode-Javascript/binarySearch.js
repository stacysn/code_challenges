/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

 */

var search = function(nums, target) {
  let low = 0;
  let high = nums.length;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > nums[low]) {
      if (nums[low] <= target && nums[mid] > target) {
        high = mid;
      } else {
        // add 1 to mid to not have a repeat check
        low = mid + 1;
      }
    } else {
      // Use nums[low] > target instead of nums[high] <= target to avoid overflow
      if (nums[low] > target && nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
  }
  return -1;
};


console.log(search([4,5,6,7,0,1,2], 0))