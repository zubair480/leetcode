// Same Tree

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val != q.val) return true;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
