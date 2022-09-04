// MaximumDepthOfBinaryTree

const maxDepthOfBinaryTree = (root) => {
  if (!root) return 0;
  return (
    1 +
    Math.max(maxDepthOfBinaryTree(root.left), maxDepthOfBinaryTree(root.right))
  );
};
