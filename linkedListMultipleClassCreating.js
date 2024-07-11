class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  isSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      this.head = node;
    } else {
      node.next = this.head;
      this.node = node;
    }

    this.size++;
  }
}

const list = new LinkedList();

console.log("Is List is Empty", list.isEmpty());
console.log("Size of list", list.isSize());
list.prepend(20);
list.prepend(30);
list.prepend(40);
