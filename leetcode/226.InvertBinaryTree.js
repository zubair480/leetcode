// Invert Binary Search tree

let invertBinarySearchTree = (root) => {
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertBinarySearchTree(root.left);
  invertBinarySearchTree(root.right);
  return head;
};

/**
 * We will  traverse the tree using DFS
 * and swap left with right as we continue
 */
