/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let result = 0;
    let num = 0;
    let sign = 1; 

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (char >= '0' && char <= '9') {
            num = num * 10 + parseInt(char);
        } else if (char === '+' || char === '-') {
            result += sign * num;
            num = 0;
            sign = char === '+' ? 1 : -1;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop(); 
        }
    }

    result += sign * num;
    
    return result;
};