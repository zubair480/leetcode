// Convert sorted array into binary tree
// I am doing this by using three pointers L M and R

const sortedArrayToBST = (nums) => {
  if (!nums) return null;

  let mid = Math.floor((left + right) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid - 1));
  root.right = sortedArrayToBST(nums.slice(mid + 1, nums.length - 1));
  return root;
};
