/* 

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/

// Logic for solution:

// Loop through the arr of strings
// compare the first word to the next word, then to the next and so on...
// While comparing the words, make the larger word shorter until every word in the (once larger) word is now included in the first word - giving us a prefix.
// Return an empty string if no common prefix is found

// Ex: first word = 'flower'
// next word = 'flowerssss'        => 'flower' is the common prefix
// 1, flower === flowersss ?
// 2, flower === flowerss ?
// 3, flower === flowers ?
// 4, flower = flower ?        => Yes. We have a common prefix now.

const longestCommonPrefix = (strs) => {
	class Prefix {
		constructor(arr) {
			this.arr = arr;
		}
		getPrefix() {
			if (this.arr.length == 0) {
				return "";
			}
			let prefix = this.arr[0];
			for (let i = 1; i < this.arr.length; i++) {
				while (this.arr[i].indexOf(prefix) != 0) {
					prefix = prefix.substring(0, prefix.length - 1);
				}
			}
			return prefix;
		}
	}
	const test = new Prefix(strs);
	return test.getPrefix();
};

/* 
    OUTCOME: SUCCESS.
    
    Runtime: 
    58 ms, **faster than 97.34% of JavaScript online submissions for Longest Common Prefix.
    
    Memory Usage: 
    42.4 MB, **less than 75.40% of JavaScript online submissions for Longest Common Prefix.

*/
