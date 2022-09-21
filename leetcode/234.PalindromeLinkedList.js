// Leetcode 234.Palindrome linked list

const PalindromeLinkedList = (head) => {
  // slow fast pointer
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse linked list

  let prev = null;

  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // check if palindrome

  let left = prev;
  let right = head;

  while (head) {
    if (left.val != head.val) return false;
    left = left.next;
    head = head.next;
  }
  return true;
};

/**
 * traverse with fast and slow pointer
 * reverse after slow pointer
 * check if slow pointer is equal to head
 */
