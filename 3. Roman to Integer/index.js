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

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

const romanToInt = (s) => {
	// declare an object to store corresponding values
	const dict = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	// declare 2 pointers (left and right), and initialize sum
	// we will return the sum variable after adding corresponding values in s
	let sum = 0,
		left = 0,
		right = 1;

	// while the left pointer is less than the length of the input string,
	// check if the value of next character after left pointer (right pointer) is larger.
	while (left < s.length) {
		if (dict[s[left]] < dict[s[right]]) {
			// if it is, the value is equal to right - left. Add to sum and move pointers
			sum += dict[s[right]] - dict[s[left]];
			left += 2; // adding 2 because right pointer accounts for left++
			right += 2;
		}
		// if not larger, add the value at left index to sum and increase pointers by 1
		else {
			sum += dict[s[left]];
			left++;
			right++;
		}
	}
	return sum;
};

// Accepted: 139ms, faster than 88% of other runtimes.
