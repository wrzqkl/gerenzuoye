/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let minOpen = 0; // 最少可能的未匹配左括号数
    let maxOpen = 0;  // 最多可能的未匹配左括号数

    for (const char of s) {
        if (char === '(') {
            minOpen++;
            maxOpen++;
        } else if (char === ')') {
            minOpen = Math.max(minOpen - 1, 0);
            maxOpen--;
            if (maxOpen < 0) return false; // 右括号太多
        } else { // '*'
            minOpen = Math.max(minOpen - 1, 0);
            maxOpen++;
        }
    }

    return minOpen === 0;
};