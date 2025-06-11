/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    const nums = String(n).split('');
    let i = nums.length - 2;
    
    // 1. 从后向前找到第一个下降的数字
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i === -1) return -1; // 已经是最大排列
    
    let j = nums.length - 1;
    // 2. 找到比nums[i]大的最小数字
    while (j > i && nums[j] <= nums[i]) {
        j--;
    }
    
    // 3. 交换这两个数字
    [nums[i], nums[j]] = [nums[j], nums[i]];
    
    // 4. 反转i+1到末尾的数字
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    
    // 转换为数字并检查范围
    const result = parseInt(nums.join(''), 10);
    return result > 2147483647 ? -1 : result;
};