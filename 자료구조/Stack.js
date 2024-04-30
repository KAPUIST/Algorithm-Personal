//peek 은 가장 위에 데이터를 보여줄수있어야함
//push 는 스택에 데이터추가
//pop 은 스택 맨위에 데이터를 꺼내옴

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  peek() {
    if (this.head === null) {
      return null;
    }
    return this.head.value;
  }
  push(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
  }
  pop() {
    let head = this.head.value;
    this.head = this.head.next;
    return head;
  }
}
let stack = new Stack();
stack.push('123');
stack.push('234');
console.log(stack);
console.log(stack.peek());
stack.pop();
console.log(stack);
