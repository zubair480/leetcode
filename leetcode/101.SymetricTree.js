// Symetric tree

const isSymatric = (node) => {
  if (!node) return true;
  return traverse(node.left, node.right);
};
const traverse = (node1, node2) => {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  if (node1.val !== node2.val) return false;

  return traverse(node1.left, node2.right) && traverse(node1.right, node2.left);
};
