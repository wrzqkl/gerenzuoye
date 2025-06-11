/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    // 统计单词频率
    const freqMap = new Map();
    for (const word of words) {
        freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }
    
    // 转换为数组并排序
    const sorted = [...freqMap.entries()].sort((a, b) => {
        // 频率高的在前
        if (b[1] !== a[1]) return b[1] - a[1];
        // 频率相同按字典序
        return a[0].localeCompare(b[0]);
    });
    
    // 取前k个单词
    return sorted.slice(0, k).map(item => item[0]);
};