/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;
    const lps = new Array(n).fill(0);
    
    for (let i = 1, len = 0; i < n;) {
        if (s[i] === s[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    
    const l = lps[n - 1];
    return l !== 0 && n % (n - l) === 0;
};