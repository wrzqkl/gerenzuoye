/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    
    let deque = [];
    let minLength = Infinity;
    
    for (let j = 0; j <= n; j++) {
        while (deque.length > 0 && prefixSum[j] - prefixSum[deque[0]] >= k) {
            minLength = Math.min(minLength, j - deque[0]);
            deque.shift();
        }
        while (deque.length > 0 && prefixSum[j] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop();
        }
        deque.push(j);
    }
    
    return minLength !== Infinity ? minLength : -1;
};