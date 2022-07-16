/* 
Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Example 1:
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

Example 2:
Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.

*/

const canPartition = (nums) => {
	let sum = 0;
	for (let num of nums) {
		sum += num;
	}

	if (sum & (1 === 1)) return false;

	const half = sum >> 1;

	let dp = Array(half);
	dp[0] = [true, ...Array(nums.length).fill(false)];

	for (let i = 1; i < nums.length + 1; i++) {
		dp[i] = [true, ...Array(half).fill(false)];
		for (let j = 1; j < half + 1; j++) {
			if (j >= nums[i - 1]) {
				dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
			}
		}
	}

	return dp[nums.length][half];
};
