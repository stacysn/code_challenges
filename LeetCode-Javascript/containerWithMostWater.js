/* Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, 
which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

ex:
  Input: [1,8,6,2,5,4,8,3,7]
  Output: 49

*/


var maxArea = (height) => {
  let largest = 1; // largest (x * height)
  if (height.length === 2) {
      return Math.min.apply(null, height)
  }
  
  for (let i = 0; i < height.length; i++) {
      for (let j = 1; j < height.length; j++) {
          let xAxis = j - i;
          let yAxis = Math.min(height[i], height[j])
          let area = xAxis * yAxis;
          if (area > largest) {
              largest  =  area;
          }

      }
  }
  return largest
  
};