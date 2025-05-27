/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];
    
    for (let digit of num) {
        while (k > 0 && stack.length > 0 && digit < stack[stack.length - 1]) {
            stack.pop(); 
            k--; 
        }
        stack.push(digit); 
    }
    
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    let result = stack.join('');
    let i = 0;
    while (i < result.length && result[i] === '0') {
        i++;
    }
    result = result.slice(i);
    
    return result === '' ? '0' : result;
};