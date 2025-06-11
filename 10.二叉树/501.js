/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let base = 0, count = 0, maxCount = 0;
    let answer = [];

    const update = (x) => {
        if (x === base) {
            ++count;
        } else {
            count = 1;
            base = x;
        }
        if (count === maxCount) {
            answer.push(base);
        }
        if (count > maxCount) {
            maxCount = count;
            answer = [base];
        }
    }

    const dfs = (o) => {
        if (!o) {
            return;
        }
        dfs(o.left);
        update(o.val);
        dfs(o.right);
    }

    dfs(root);
    return answer;

};