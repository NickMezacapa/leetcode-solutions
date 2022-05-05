/* 

Given an integer 'x', return true if 'x' is a palindrome integer.
An integer is a palindrome when it reads the same backwards as it does forwards.

Ex:
121 => Palindrome - true
123 => No Palindrome - false

*/

// Logic for solution:
// Convert the integer into a string
// Convert the string into an array of substrings
// Loop over the new array, loop starting at the last character in the array and finishing at the first char in the array
// By looping from the end of the array, we can add the numbers to an empty array in reverse order
// Join the array and convert back to an integer
// Returning the copy as strictly equal to the original 'x' input will produce a boolean for our answer

const isPalindrome = (x) => {
	let numString = x.toString();
	let numArr = numString.split("");
	let tempArr = [];
	for (let i = numArr.length - 1; i >= 0; i--) {
		tempArr.push(numArr[i]);
	}
	let joinedStr = tempArr.join("");
	let reversedCopy = parseInt(joinedStr);
	return reversedCopy === x;
};
