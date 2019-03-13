/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. 
Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
*/


var intToRoman = function(num) {
  let romanNum = '';
    let numArr = num.toString().split('');
  
    for (let i = 0; i < numArr.length; i++) { 
      let backToNum = parseInt(numArr[i]);
      if (numArr.length - i === 4) { // 3999 --> 4 - 0 = 4
        if (backToNum < 4) {
          let i = 0;
          while(i < backToNum){
            romanNum += 'M';
            i++;
          }
        }
      } 
      if (numArr.length - i === 3) { // 999 --> 4 - 1 = 3
        if (backToNum === 4) {
          romanNum += 'CD';
        } else if (backToNum === 5) {
          romanNum += 'D';
        } else if (backToNum < 4) {
          let i = 0;
          while (i < backToNum) {
            romanNum += 'C';
            i++;
          }
        } else if (backToNum === 9) {
          romanNum += 'CM';
        } else if (backToNum > 5) {
          let j = 5;
          romanNum += 'D'
          while( j < backToNum) {
            romanNum += 'C';
            j++;
          }
        }
      }
      if (numArr.length - i === 2) { // 99 --> 4 - 2 = 2
        if (backToNum === 4) {
          romanNum += 'XL';
        } else if (backToNum === 5) {
          romanNum += 'L';
        } else if (backToNum < 4) {
          let i = 0;
          while (i < backToNum) {
            romanNum += 'X';
            i ++;
          }
        } else if (backToNum === 9) {
          romanNum += 'XC';
        } else if (backToNum > 5) {
          let j = 5;
          romanNum += 'L';
          while (j < backToNum) {
            romanNum += 'X';
            j++;
          }
        }
      }
      if (numArr.length - i === 1){ // 9 --> 4 - 3 = 1;
        if (backToNum === 4) {
          romanNum += 'IV';
        } else if (backToNum === 5) {
          romanNum += 'V';
        } else if (backToNum < 4) {
          let i = 0;
          while (i < backToNum) {
            romanNum += 'I';
            i++;
          }
        } else if (backToNum === 9) {
          romanNum += 'IX';
        } else if (backToNum > 5) {
          let j = 5;
          romanNum += 'V';
          while (j < backToNum) {
            romanNum += 'I';
            j++;
          }
        }
      } 
    }
    return romanNum;
  };