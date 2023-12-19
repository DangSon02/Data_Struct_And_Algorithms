// list 1: 1 -> 2 -> 4
// list 2: 1-> 3 -> 4

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let cur = new Node();

const a = new Node(1);
const b = new Node(2);
const c = new Node(4);
const d = new Node(1);
const e = new Node(3);
const f = new Node(4);

a.next = b;
b.next = c;
d.next = e;
e.next = f;

const sortLinkedList = (list1, list2) => {
  let head = cur;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }

    cur = cur.next;
  }

  if (list1) {
    cur.next = list1;
  } else {
    cur.next = list2;
  }
  return head.next;
};

let megerSort = sortLinkedList(a, d);

const printLinkedList = (head) => {
  cur = head;
  while (cur) {
    console.log(cur.val);
    cur = cur.next;
  }
};

printLinkedList(megerSort);
