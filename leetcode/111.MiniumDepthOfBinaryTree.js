// Minimum depth of binary tree

const minDepthOfBinaryTree = (root) => {
  if (!root) return 0;

  let leftDepth = minDepthOfBinaryTree(root.left);
  let rightDepth = minDepthOfBinaryTree(root.right);

  if (leftDepth === 0 || rightDepth === 0) {
    return Math.max(leftDepth, rightDepth) + 1;
  } else {
    return Math.min(leftDepth, rightDepth) + 1;
  }
};

/*
First we will check if binary tree is empty
Second we will traverse the binary tree
Third we'll check which side does not exists and return the other side
Fourth we will check for the minimum side
*/
