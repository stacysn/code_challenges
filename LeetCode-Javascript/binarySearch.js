/*
  Given a sorted (in ascending order) integer array nums of n elements and a 
  target value, write a function to search target in nums. If target exists, 
  then return its index, otherwise return -1.

  Example 1:

  Input: nums = [-1,0,3,5,9,12], target = 9
  Output: 4
  Explanation: 9 exists in nums and its index is 4

  Example 2:

  Input: nums = [-1,0,3,5,9,12], target = 2
  Output: -1
  Explanation: 2 does not exist in nums so return -1

 */


var search = function(nums, target) {
  let floor = 0
  let ceiling = nums.length - 1
  
  while (floor <= ceiling) {
    
  let guess = Math.floor((floor + ceiling) / 2);
    if (nums[guess] < target) {
      floor = guess + 1;
    } else if (nums[guess] > target) {
      ceiling = guess - 1;
    } else {      
      return guess;
    }
  }
  return -1;
}; 