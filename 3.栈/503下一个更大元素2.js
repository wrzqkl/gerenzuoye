/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = []; 
    
    for (let i = 0; i < n * 2; i++) {
        const currentIndex = i % n;
        const currentNum = nums[currentIndex];
        
        while (stack.length > 0 && nums[stack[stack.length - 1]] < currentNum) {
            const topIndex = stack.pop();
            result[topIndex] = currentNum; 
        }
        
        if (i < n) {
            stack.push(currentIndex);
        }
    }
    
    return result;
};