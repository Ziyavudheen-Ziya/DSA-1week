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
    return this.size === 0;
  }

  isSize() {
    return this.size;
  }

//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.tail = node;
//     } else {
//       this.head.prev = node;
//       node.next = this.head;
//     }

//     this.size++;
//     this.head = node;
//   }

  append(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.prev = this.tail;

      this.tail.next = node;
    }
    this.size++;
    this.tail = node;
  }

  insert(value, index) {
    const node = new Node(value);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next
    }

    node.prev = curr;
    node.next = curr.next;
    curr.next.prev = node;
    curr.next = node;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

// console.log("Is List is Empty", list.isEmpty());
// console.log("Size of list", list.isSize());
// list.print();
// list.prepend(1);
// list.prepend(0);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.insert(70000, 2);

list.print();
