//peek 은 가장 위에 데이터를 보여줄수있어야함
//push 는 스택에 데이터추가
//pop 은 스택 맨위에 데이터를 꺼내옴

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// 스택 만들기
class Stack {
  constructor() {
    this.head = null;
  }
  //peek 함수 만들기
  peek() {
    const thisHead = this.head;
    if (thisHead === null) {
      return null;
    }
    return thisHead.value;
  }
  //push 함수
  push(value) {
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
  }

  //꺼내기 함수
  pop() {
    const thisHead = this.head;
    if (thisHead === null) {
      return null;
    }
    const delNode = thisHead;
    this.head = thisHead.next;
    return delNode.value;
  }
}
let stack = new Stack();
stack.push('123');

stack.push('234');
console.log(stack);
console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack);
// console.log(stack);
