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
      node.prev = this.tail;
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  deletion(index) {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    curr.next.prev = curr.prev;
    curr.prev.next = curr.next;
  }

  print() {
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} `;
      curr = curr.next;
    }

    console.log(listValues);
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.deletion(3);

list.print();
