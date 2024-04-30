//peek 큐의 맨앞데이터를 확인
//enqueue 큐에 데이터를 삽입하는 작업
//dequeue 큐에 데이터를 가져오는작업
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  dequeue() {
    console.log(this.head);
    if (this.head === null) {
      return null;
    }
    //제거할 헤드
    //현재 헤드를 콕 찝어 가져옴
    const deleteHead = this.head;
    //다음  헤드를 쇼쇽 당겨옴
    this.head = this.head.next;
    return deleteHead.value;
  }
  enqueue(value) {
    //신규노드 생성..
    const newNode = new Node(value);
    // 큐에 아무런 데이터도 없다면

    if (this.head === null) {
      //처음과 끝 모두 새로운 노드
      this.head = newNode;
      this.tail = newNode;
    } else {
      //현재 꼬리로 설정되어 있는 놈의! 다음으로 성정 해주는것음
      //어째서 꼬리 넥스트에 할당하는데 head에 들어가냐? 라고하면
      // 이코드가 실행되기전에는 헤드와 꼬리가 데이터가 동일하기때문 (메모리)
      this.tail.next = newNode;
      // 새로운 꼬리로 설정
      this.tail = newNode;
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);

console.log(queue);
console.log(queue.dequeue()); // 1
