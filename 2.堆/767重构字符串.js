/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    const maxChar = Object.keys(charCount).reduce((max, char) => charCount[char] > charCount[max]? char : max);
    if (charCount[maxChar] > Math.ceil(s.length / 2)) {
        return "";
    }
    const pq = Object.entries(charCount).sort((a, b) => b[1] - a[1]);
    const result = [];
    let prev = null;
    while (pq.length > 0) {
        let [char, count] = pq.shift();
        if (char!== prev) {
            result.push(char);
            if (--count > 0) {
                pq.push([char, count]);
            }
            prev = char;
        } else {
            if (pq.length === 0) {
                return "";
            }
            let [nextChar, nextCount] = pq.shift();
            result.push(nextChar);
            if (--nextCount > 0) {
                pq.push([nextChar, nextCount]);
            }
            pq.push([char, count]);
            prev = nextChar;
        }
        pq.sort((a, b) => b[1] - a[1]);
    }
    return result.join('');
};