/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];
        if (!graph[a]) {
            graph[a] = {};
        }
        if (!graph[b]) {
            graph[b] = {};
        }
        graph[a][b] = value;
        graph[b][a] = 1 / value;
    }
    const dfs = (start, end, visited) => {
        if (!graph[start] || visited.has(start)) {
            return -1.0;
        }
        if (start === end) {
            return 1.0;
        }
        visited.add(start);
        for (let neighbor in graph[start]) {
            const next = graph[start][neighbor];
            const result = dfs(neighbor, end, visited);
            if (result!== -1.0) {
                return next * result;
            }
        }
        return -1.0;
    };
    const results = [];
    for (let query of queries) {
        const [a, b] = query;
        const visited = new Set();
        const result = dfs(a, b, visited);
        results.push(result);
    }
    return results;
};