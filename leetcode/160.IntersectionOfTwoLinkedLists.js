// Intersection of Two linked lists

const IntersectionOfTwoLists = (headA, headB) => {
  if (!headA || !headB) return null;
  let pointer1 = headA;
  let pointer2 = headB;
  while (!pointer1 || !pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;

    if (pointer1 === pointer2) return pointer1;
    if (!pointer1) {
      pointer1 = headB;
    }
    if (!pointer2) {
      pointer2 = headA;
    }
  }
  return pointer1;
};

/*
1.Its similar to sliding window. 
2.We use two pointers. 
3.WHen one of these pointers is null we move it to the curr head of the second list
4.If the value of both pointers match we will return anyone of them. clamming that this list intersect at this particular node */
