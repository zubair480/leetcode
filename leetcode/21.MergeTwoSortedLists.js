// Merge Two Sorted Lists

const MergeTwoSortedLists = (l1, l2) => {
  let curr = new ListNode();
  let dummy = curr;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr.next;
  }
  if (l1) l1 = l1.next;
  if (l2) l2 = l2.next;
  return dummy.next;
};
