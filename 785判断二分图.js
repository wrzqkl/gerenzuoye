/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    const color = new Array(n).fill(0);
    const dfs = (node, c) => {
        color[node] = c;
        for (let neighbor of graph[node]) {
            if (color[neighbor] === 0) {
                if (!dfs(neighbor, -c)) {
                    return false;
                }
            } else if (color[neighbor] === c) {
                return false;
            }
        }
        return true;
    };
    for (let i = 0; i < n; i++) {
        if (color[i] === 0) {
            if (!dfs(i, 1)) {
                return false;
            }
        }
    }
    return true;
};