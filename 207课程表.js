/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill(0).map(() => []);
    for (const [course, preCoures] of prerequisites) {
        adjList[preCoures].push(course);
    }
    const visited = new Array(numCourses).fill(0);
    const dfs = (course) => {
        visited[course] = 1;
        for (const neighbor of adjList[course]) {
            if (visited[neighbor] === 0) {
                if (!dfs(neighbor)) {
                    return false;
                }
            } else if (visited[neighbor] === 1) {
                return false;
            }
        }
        visited[course] = 2;
        return true;
    };
    for (let i = 0; i < numCourses; i++) {
        if (visited[i] === 0) {
            if (!dfs(i)) {
                return false;
            }
        }
    }
    return true;
};