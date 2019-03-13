/* 
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.


Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/


var lengthOfLongestSubstring = function(s) {
  let pointer1 = 0;
  let pointer2 = 1;
  let result = 1;
  if (s.length <= 1) {
      return s.length;
  }
  while (pointer2 < s.length) {
      let sub = s.slice(pointer1, pointer2);
      if (sub.indexOf(s[pointer2]) !== -1) {
          pointer1 = pointer1 + sub.indexOf(s[pointer2]) + 1;
      } else {
          pointer2 ++;
          result = pointer2 - pointer1 > result ? pointer2 - pointer1 : result;
      }
  } 
  return result;
  
};