/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxArea = 0;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0 || visited[i][j]) {
            return 0;
        }
        visited[i][j] = true;
        let area = 1;
        for (const dir of directions) {
            const newI = i + dir[0];
            const newJ = j + dir[1];
            area += dfs(newI, newJ);
        }
        return area;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 &&!visited[i][j]) {
                const area = dfs(i, j);
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
};