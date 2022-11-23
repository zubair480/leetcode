// 404. Sum of left leaves

/**
 * 1. Return a dfs function in the main function with arguments node, sum = 0 and isLeft
 * 2. create a new function dfs
 * 3. if node is null return 0
 * 4. if node.left is null and node.right is null and isLeft is true return node.val
 * 5. return dfs(node.left, sum, true) + dfs(node.right, sum, false)
 */

let sumOfLeftLeaves = function (root) {
  return dfs(root, 0, false); // helper Depth first search function
};

function dfs(node, sum, isLeft) {
  if (!node) return 0;
  if ((node.left = null && node.right === null && isLeft)) return node.val; // return value of left node
  return dfs(node.left, sum, true) + dfs(node.right, sum, false); // it will not add the value of right
}
