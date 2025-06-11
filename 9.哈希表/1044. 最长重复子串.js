/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    const n = s.length;
    const base = 26;
    const mod = 2**32;
    let result = "";
    
    // 二分查找可能的最大长度
    let left = 1, right = n;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const found = findDuplicate(s, mid, base, mod);
        
        if (found !== "") {
            result = found;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
};

// 使用滚动哈希查找指定长度的重复子串
function findDuplicate(s, L, base, mod) {
    const n = s.length;
    let hash = 0;
    let power = 1;
    
    // 计算第一个窗口的哈希值和power值
    for (let i = 0; i < L; i++) {
        hash = (hash * base + s.charCodeAt(i)) % mod;
        if (i < L - 1) power = (power * base) % mod;
    }
    
    const seen = new Map();
    seen.set(hash, 0);
    
    // 滑动窗口计算哈希值
    for (let i = 1; i <= n - L; i++) {
        // 移除左边字符，添加右边字符
        hash = ((hash - s.charCodeAt(i - 1) * power) % mod + mod) % mod;
        hash = (hash * base + s.charCodeAt(i + L - 1)) % mod;
        
        // 检查是否已存在相同哈希
        if (seen.has(hash)) {
            const start = seen.get(hash);
            const currentSub = s.substring(i, i + L);
            const prevSub = s.substring(start, start + L);
            
            // 处理哈希冲突，验证实际字符串是否相同
            if (currentSub === prevSub) {
                return currentSub;
            }
        } else {
            seen.set(hash, i);
        }
    }
    
    return "";
};