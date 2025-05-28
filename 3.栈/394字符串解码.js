/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [];  
    let strStack = [];  
    let currentNum = 0;
    let currentStr = '';
    
    for (let char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            numStack.push(currentNum);
            strStack.push(currentStr);
            currentNum = 0;
            currentStr = '';
        } else if (char === ']') {
            let repeatTimes = numStack.pop();
            let prevStr = strStack.pop();
            currentStr = prevStr + currentStr.repeat(repeatTimes);
        } else {
            currentStr += char;
        }
    }
    
    return currentStr;
};