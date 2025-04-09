/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const n = edges.length;
    const parent = new Array(n + 1).fill(0).map((_, i) => i);
    const find = (x) => {
        if (parent[x]!== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX!== rootY) {
            parent[rootY] = rootX;
            return true;
        }
        return false;
    };
    for (let i = 0; i < n; i++) {
        const [u, v] = edges[i];
        if (!union(u, v)) {
            return edges[i];
        }
    }
    return [];
};