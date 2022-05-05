/* 

Given an array of integers (nums) and a target integer (target),
return indices of the two numbers such that they add up to tartget.

You may assume that each input would ahve exactly one solution, and you
may not use the same element twice.

Ex:
Given nums = [2,7,11,15], target = 9;
The correct output would be [0,1], 2 + 7 = 9

*/

// Solution:

const twoSum = (nums, target) => {
	// declare an empty object to store all elements already seen.
	const prevValues = {};
	// Loop over the nums array
	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i]; // current position in the loop
		const neededValue = target - currentNum; // the value needed to satisy solution
		const index2 = prevValues[neededValue]; // Check the storage to see if a solution to the target has already been found
		// If the solution has already been found, return it
		if (index2 != null) {
			return [index2, i];
			// If the solution hasn't been found, update the hash with the current number and continue in the loop
		} else {
			prevValues[currentNum] = i;
		}
	}
};
