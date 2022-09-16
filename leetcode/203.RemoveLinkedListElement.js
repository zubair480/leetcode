// Remove linkedlist elements

const removeLinkedListElements = (head, val) => {
  if (!head) return null;
  let curNode = new ListNode(-1);
  head = curNode.next;
  curNode = head;
  while (curNode.next) {
    if (curNode.next.val === val) {
      curNode.next = curNode.next.next;
    } else curNode = curNode.next;
  }
  return head.next;
};

/**
 * We are using a new list node just in case the first node has the desired value
 * we'll return null if there is no node
 * we'll swap newNode.next with the head and the newNode to be the new head
 * then we will use a while loop to iterate through the linked list
 * if the value is found we will skip the node
 * if value is not found we'll simply move to the next node
 * at the end we will return curNode.next as we have assigned it to be out new head
 */
