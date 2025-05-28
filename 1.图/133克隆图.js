/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}
var cloneGraph = function(node) {
    if (!node) return null;
    const visited = new Map();
    const dfs = (n) => {
        if (visited.has(n)) {
            return visited.get(n);
        }
        const newNode = new Node(n.val);
        visited.set(n, newNode);
        for (let neighbor of n.neighbors) {
            newNode.neighbors.push(dfs(neighbor));
        }
        return newNode;
    }
    return dfs(node);
};