/* 
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

var longestPalindrome = function(s) {
  var substring = "";
  //length is odd number
  
  for(let index=0 ; index < s.length ; index++){
      
      let i = index-1;
      let j = index+1;
      let sub = s[index];
      while(i>=0 && j<s.length ){
          if(s[i]!==s[j]) break;
          sub = s[i]+sub+s[j]  
          i--;
          j++;
      }
      if(sub.length > substring.length ) substring =sub;
      
  }  
  //length is even number
  for(index=0 ; index < s.length-1 ; index++){
      if(s[index]===s[index+1]){
          let i = index-1;
          let j = index+2;
          let sub = s[index]+s[index+1];
        while(i>=0 && j<s.length ){
           if(s[i]!==s[j]) break;
           sub = s[i]+sub+s[j] 
            i--;
          j++;
      }
      if(sub.length > substring.length ) substring =sub;
      } 
    
  }

  return substring
};