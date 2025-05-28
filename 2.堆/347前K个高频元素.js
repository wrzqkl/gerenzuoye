/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequencyMap = {};
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    const entries = Object.entries(frequencyMap);
    entries.sort((a, b) => b[1] - a[1]);
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(Number(entries[i][0]));
    }
    return result;
};