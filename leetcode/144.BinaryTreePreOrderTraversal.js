// Binary tree preorder tarvarsal

const binaryTreePreorderTraversal = (root) => {
  const res = [];

  const traverse = (node) => {
    if (!node) return;
    res.push(node.val);
    traverse(node.left);
    traverse(node.right);
  };
  return res;
};

// Pre order traversal R L R
