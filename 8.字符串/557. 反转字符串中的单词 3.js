/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split('');
    let start = 0;
    
    for (let i = 0; i <= arr.length; i++) {
        // 遇到空格或字符串末尾时反转单词
        if (arr[i] === ' ' || i === arr.length) {
            let left = start;
            let right = i - 1;
            
            // 反转当前单词
            while (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            }
            
            start = i + 1; // 更新下一个单词的起始位置
        }
    }
    
    return arr.join('');
};