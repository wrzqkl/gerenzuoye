/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    const n = s.length;
    
    // 中心扩展函数
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < n && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    };
    
    for (let i = 0; i < n; i++) {
        // 奇数长度回文
        expandAroundCenter(i, i);
        // 偶数长度回文
        expandAroundCenter(i, i + 1);
    }
    
    return count;
};