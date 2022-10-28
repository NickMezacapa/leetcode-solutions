/* 
SUBSTRINGS OF SIZE THREE WITH DISTINCT CHARACTERS

A string is good if there are no repeated characters.
Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
A substring is a contiguous sequence of characters in a string.

 
Example 1:

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".


Example 2:

Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".

*/

const countGoodSubstrings = (str) => {
	// declare array to hold the substrings
	let substrings = [];

	// use helper method recursion to recursively get substrings of length 3 ...
	// ... for the length of the input string,
	// if we reach a point where the input length is less than 3,
	// we can no longer form substrings.
	// ensure there is a different input for each recursive call by using slice method
	const helper = (helperInput) => {
		if (helperInput.length < 3) return substrings;
		let sub = helperInput.substring(0, 3);
		substrings.push(sub);
		return helper(helperInput.slice(1));
	};
	helper(str);

	// for each substring in the substrings array,
	// create a new set, this will account for duplicate elements
	// if the set size is less than 3, filter that out of substrings array
	substrings.forEach((substr) => {
		const subSet = new Set(substr);
		if (subSet.size !== 3)
			substrings = substrings.filter((item) => item !== substr);
	});

	// now that substrings has been filtered, and we want the AMOUNT of good substr,
	// we can simply return the length of substrings array.
	return substrings.length;
};

// test:
countGoodSubstrings("xyzzaz"); // expected: 1

// PASSED, Runtime 75ms - faster than 88% TS submissions, memory: 47mb
