// Linked list cycle

const linkedListCycle = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
};

/*
1.Its kind of a sliding window

*/
