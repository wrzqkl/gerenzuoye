/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let heights = new Array(cols).fill(0);
    let maxArea = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    return maxArea;
};

function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    heights.push(0);
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            let top = stack.pop();
            let width;
            if (stack.length === 0) {
                width = i;
            } else {
                width = i - stack[stack.length - 1] - 1;
            }
            maxArea = Math.max(maxArea, heights[top] * width);
        }
        stack.push(i);
    }
    return maxArea;
};