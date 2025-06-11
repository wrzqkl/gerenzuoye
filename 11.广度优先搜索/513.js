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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if(!root) return null;
  const queue = [root]
  let mostLeft = null;
  while(queue.length > 0){
    let curLevelSize = queue.length
//因为是层序遍历，所以每次层的queue的第一个必然是最左边的节点
    mostLeft = queue[0]
    for(let i = 0; i < curLevelSize; i++){
      const curNode = queue.shift();

      curNode.left && queue.push(curNode.left)
      curNode.right&& queue.push(curNode.right)
    }
  }

  return mostLeft.val

};