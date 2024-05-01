//peek 큐의 맨앞데이터를 확인
//enqueue 큐에 데이터를 삽입하는 작업
//dequeue 큐에 데이터를 가져오는작업
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//큐 만들기
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  dequeue() {
    if (this.head === null) {
      return null;
    }
    const delHead = this.head;
    this.head = delHead.next;
    return delHead.value;
  }
  enqueue(value) {
    //신규노드 생성..
    const newNode = new Node(value);
    // 큐에 아무런 데이터도 없다면
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    //처음과 끝 모두 새로운 노드

    //현재 꼬리로 설정되어 있는 놈의! 다음으로 성정 해주는것음
    //어째서 꼬리 넥스트에 할당하는데 head에 들어가냐? 라고하면
    // 이코드가 실행되기전에는 헤드와 꼬리가 데이터가 동일하기때문 (메모리)

    // 새로운 꼬리로 설정
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue);
