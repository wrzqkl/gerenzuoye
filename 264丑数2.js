/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const uglyNumbers = [1];
    let p2 = 0, p3 = 0, p5 = 0;
    while (uglyNumbers.length < n) {
        const num2 = uglyNumbers[p2] * 2;
        const num3 = uglyNumbers[p3] * 3;
        const num5 = uglyNumbers[p5] * 5;
        const minNum = Math.min(num2, num3, num5);
        uglyNumbers.push(minNum);
        if (minNum === num2) p2++;
        if (minNum === num3) p3++;
        if (minNum === num5) p5++;
    }
    return uglyNumbers[n - 1];
};