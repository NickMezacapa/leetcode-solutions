/* 

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

 
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"


Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 */

var longestCommonPrefix = function (strs) {
	let first_pointer = 1,
		checker = strs[0],
		result = "";

	if (strs.length === 1) return strs[0];

	while (first_pointer < strs.length) {
		let item = strs[first_pointer],
			item_pointer = 0;

		while (item_pointer < item.length) {
			if (item[item_pointer] !== checker[item_pointer]) {
				result = checker.slice(0, item_pointer);
				item_pointer = item.length;
			} else item_pointer++;
		}
		first_pointer++;
	}
	return result;
};
