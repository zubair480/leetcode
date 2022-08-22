// Add two linked lists

const addTwoNumbers = (l1, l2) => {
  let result = new ListNode(0);
  // Result is the first Node of the new list node
  let current = result; // We will store our first node of new linkedList in a variable
  let carry = 0;
  while (l1 || l2 || carry) {
    // While there is a node in either of the linkedList or there is a carry
    let v1 = 0; // value is 0 so we can iterate through the linkedList
    let v2 = 0;
    if (l1) {
      v1 = l1.val;
    } // store the value of the first linkedList in a variable
    if (l2) {
      v2 = l2.val;
    }
    let sum = v1 + v2 + carry; // add the values of the linkedList and the carry
    carry = Math.floor(sum / 10); // dividing the number by 10 will give us the carry and we will use math.floor to get the integer value
    sum = sum % 10; // modulo will give us the remainder of the sum
    current.next = new ListNode(sum); // we will create a new node with the sum and store it in the next property of the current node
    current = current.next;
    if (l1) {
      l1 = l1.next;
    } // we will continue if there is a node in the first linkedList or second
    if (l2) {
      l2 = l2.next;
    }
  }
  return result.next;
};
