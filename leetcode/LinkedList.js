class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// A -> B -> C -> D -> null

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const printLinkedList = (head) => {
  let curent = head;

  while (curent !== null) {
    console.log(curent.val);
    curent = curent.next;
  }
};

printLinkedList(a);
