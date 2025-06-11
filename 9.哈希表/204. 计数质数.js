/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;
    
    // 初始化标记数组，默认都是质数
    const isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    
    // 筛法核心逻辑
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // 标记i的所有倍数为非质数
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    // 统计质数数量
    return isPrime.filter(val => val).length;
};