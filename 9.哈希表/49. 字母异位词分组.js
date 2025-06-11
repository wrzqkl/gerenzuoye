/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    
    for (const str of strs) {
        const count = new Array(26).fill(0);
        for (const char of str) {
            count[char.charCodeAt() - 'a'.charCodeAt()]++;
        }
        // 将计数数组转换为字符串作为键
        const key = count.join('#');
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    
    return Array.from(map.values());
};