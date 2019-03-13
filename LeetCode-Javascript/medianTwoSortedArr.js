/* 
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

var findMedianSortedArrays = function(nums1, nums2) {
  let concatArrs = nums1.concat(nums2);
  let sorted = concatArrs.sort(function(a,b){
      return a - b;
  });
  let half = sorted.length / 2;
  if (sorted.length % 2 === 0) {
      return (sorted[half] + sorted[half - 1]) / 2;
  } else {
      console.log(sorted[Math.floor(half)])
      return sorted[Math.floor(half)] 
  }
  
};