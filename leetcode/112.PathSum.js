// Binary Tree PathSum

const pathSum = (root, target) => {
  if (!root) return false;

  let hasPath = false;

  const dfs = (node, sum) => {
    if (!node.left && !node.right) {
      if (sum === node.val) return (hasPath = true);
    }

    if (node.left) {
      dfs(node.left, sum - node.val);
    }
    if (node.right) {
      dfs(node.right, sum - node.val);
    }
  };
  dfs(root, target);
  return hasPath;
};

/*
1.We will check if root does not exists and return false
2.define a variable (Boolean) to check path
3.Use a helper function DFS to traverse the tree
4.If both tree sides are ended and it has target value it will set hasPath value to true
5.It will keep traversing tree sides and subtracting target value.
*/
