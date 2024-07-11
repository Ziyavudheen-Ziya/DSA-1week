class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  isSize() {
    return this.size;
  }

  append(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
         
      node.prev = this.tail
      this.tail.next = node
    }
    this.size++;
    this.tail = node;
  }

  print() {
    let curr = this.head;

    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.print();
