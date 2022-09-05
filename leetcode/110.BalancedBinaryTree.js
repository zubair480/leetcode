// Balanced binary tee

let balancedBinaryTree = (root) => {
  if (!root) return true;

  return getHeight(root) != -1;
};

let getHeight = (node) => {
  if (!node) return 0;

  let left = getHeight(node.left);
  let right = getHeight(node.right);

  if (left === -1 || right === -1 || Math.abs(left, right) > 1) return -1;

  return Math.max(left, right) + 1;
};
