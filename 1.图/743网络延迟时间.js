/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = new Array(n + 1).fill(0).map(() => []);
    for (const [u, v, w] of times) {
        graph[u].push([v, w]);
    }
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;
    const pq = [[0, k]];
    while (pq.length > 0) {
        const [d, node] = pq.shift();
        if (d > dist[node]) {
            continue;
        }
        for (const [neighbor, time] of graph[node]) {
            const newDist = d + time;
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                pq.push([newDist, neighbor]);
            }
        }
    }
    let maxTime = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) {
            return -1;
        }
        maxTime = Math.max(maxTime, dist[i]);
    }
    return maxTime;
};