/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    const modMap = new Map();
    modMap.set(0, 1); // 初始状态，前缀和为0出现1次
    let prefixMod = 0;
    let count = 0;
    
    for (const num of nums) {
        prefixMod = (prefixMod + num) % k;
        // 处理负数取模的情况
        if (prefixMod < 0) prefixMod += k;
        
        // 查找之前是否有相同的余数
        if (modMap.has(prefixMod)) {
            count += modMap.get(prefixMod);
        }
        
        // 更新当前余数的出现次数
        modMap.set(prefixMod, (modMap.get(prefixMod) || 0) + 1);
    }
    
    return count;
};