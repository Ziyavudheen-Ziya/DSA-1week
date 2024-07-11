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

  append(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;

      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

const list = new LinkedList();

// console.log("Is empty", list.isEmpty());
// list.print();
list.append(5);
list.append(15);
list.append(10);
list.append(100);
list.append(90);
list.print();
