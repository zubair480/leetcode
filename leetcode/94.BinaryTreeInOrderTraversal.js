// Binary tree inorder Traversal

// Left Root Right

const binaryTreeInorderTraversal = (root) => {
  const res = [];

  const traversal = (node) => {
    if (!node) return;

    if (node.left) traversal(node.left);
    res.push(node.val);
    if (node.right) traversal(node.right);
  };
  traversal(root);
  return res;
};
