/* 
Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.


Example 2:

Input: s = "cbbd"
Output: "bb"

*/

const longestPalindrome = (str) => {
	let longest = "";
	for (let i = 0; i < str.length; i++) {
		let odd = findPalindrome(str, i, i);
		let even = findPalindrome(str, i, i + 1);
		let longestPalindrome = odd.length > even.length ? odd : even;
		longest =
			longestPalindrome.length > longest.length ? longestPalindrome : longest;
	}
	return longest;
};

const findPalindrome = (str, left, right) => {
	while (left >= 0 && right < str.length && str[left] === str[right]) {
		left--;
		right++;
	}
	return str.slice(left + 1, right);
};

console.log(longestPalindrome("acdcdcn")); // cdcdc
