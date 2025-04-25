/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    let left = matrix[0][0], right = matrix[n - 1][n - 1];
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0, j = n - 1;
        for (let i = 0; i < n; i++) {
            while (j >= 0 && matrix[i][j] > mid) {
                j--;
            }
            count += (j + 1);
        }
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};