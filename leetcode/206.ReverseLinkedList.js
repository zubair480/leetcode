// Reverse a linked list

const ReverseLinkedList = (head) => {
  let cur = head;
  let prev = null;
  let next;
  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

/**
 * we will reverse a linked list by using a prev variable
 * we will store the head.next val in a next variable
 * we will assign cur.next to be prev
 * and move prev to cur
 * and cur to the stored cur.next
 */
