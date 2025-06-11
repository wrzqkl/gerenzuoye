/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;
    let containsOne = false;
    
    for (let num of nums) {
        if (num === 1) {
            containsOne = true;
            break;
        }
    }
    if (!containsOne) return 1;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = 1;
        }
    }
    
    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);
        if (num === n) {
            nums[0] = -Math.abs(nums[0]);
        } else {
            nums[num] = -Math.abs(nums[num]);
        }
    }
    
    for (let i = 1; i < n; i++) {
        if (nums[i] > 0) {
            return i;
        }
    }
    
    if (nums[0] > 0) {
        return n;
    }
    
    return n + 1;
};