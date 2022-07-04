/* Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return -1.

You must write an algorithm with O(log n) runtime complexity. */

const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let middle = Math.floor((start + end) / 2);
    if (target < nums[0] || target > nums[end] || nums.length === 0) return -1;
    while (nums[middle] !== target) {
        target < nums[middle] ? end = middle - 1 : start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return nums[middle] === target ? middle : -1;
}