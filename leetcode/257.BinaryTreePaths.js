// leetcode 257. Binary Tree Paths JavaScript

const BinaryTreePaths = (root) => {
  if (!root) return [];
  let res = [];

  function dfs(node, pathCheck) {
    pathCheck += node.val;

    if (!node.left && !node.right) {
      res.push(pathCheck);
    }
    if (node.left) dfs(node.left, pathCheck + "->");
    if (node.right) dfs(node.right, pathCheck + "->");
  }

  dfs(root, "");
  return res;
};

/**
 * First check if root is empty and return empty array
 * declare a result array
 * create a Depth first search function for traversing the binary tree
 * use a path variable to store the cur value
 * check if there is no left or right path push path->childNode in result array
 * if left or right path exists traverse them
 * call Depth first search function
 * return result
 */
