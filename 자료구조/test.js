//Linked List Node 구현
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// =====>
class LinkedList {
  constructor(value) {
    //test1
    this.head = new Node(value); // Node { data: 'test1', next: null }
    this.count = 1;
  }
  //노드 추가 하기.
  append(value) {
    let currentNode = this.head;
    //next !== null true => 즉 데이터가 존재
    //currentNode = currentNode.next로 현재 바라보고있는 Node를 하나씩
    //이동 currentNode.next === null 조건을 충족시 loop 탈출
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(value);
    //node 의 꼬리 데이터를  즉 currentNode.next === null
    // 현재 노드에 꼬리데이터를 넣어줍니다.
    currentNode.next = newNode;
    this.count++;
  }
  //인덱스를 기준으로 찾아와야합니다.
  getNodeByIndex(index) {
    // 1노드
    //헤드를 처음노드로 지정
    // =====>
    let currentNode = this.head;
    // 데이터가 매우많다면 비효율적으로 보임.
    //무조건 처음부터 순회해야하기때문
    //일반 배열은 [index] 로 log(1) 한번의 작업만하는데
    //흠.. 분명 단점을 보완하기위한 연결리스트가 있을듯;
    //1
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  //데이터기준으로 조회 해보기
  // 중복 데이터가 들어간다면 이건 어떻게 되는가 가장 먼저 있는 데이터를 찾아오겟지
  getNodeByData(value) {
    let currentNode = this.head;
    while (currentNode.data !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  //원하는 위치에 노드 삽입
  addNode(index, value) {
    //첫번째 노드를 가져옴
    //반복문으로 원하는 인덱스까지 이동?
    //getNodeByIndex 를 사용하면 될듯
    //이전 노드 랑 다음 노드를 가져와야함
    let prevNode = this.getNodeByIndex(index - 1);
    // 이전노드를
    let addNode = new Node(value);
    // 해당 인덱스에 넣고 연결까지
    let nextNode = prevNode.next; //test2
    addNode.next = nextNode;
    prevNode.next = addNode;
    this.count++;

    return addNode;
  }
  //노드 삭제 기능
  //데이터 기반?  인덱스 기반?
  //데이터 기반으로 찾으려면 전 노드를 알아야함 추가 함수 필요.
  // 인덱스 기반 제거
  remove(index) {
    let findPrevNode = this.getNodeByIndex(index - 1);
    findPrevNode.next = findPrevNode.next.next;
    this.count--;
  }
  //모든 노드 가져오기 보기편하게
  getAllNode() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }
}

let test = new LinkedList('test1');

test.append('test2');
test.append('test3');
console.log(test);
//console.log('index == >', test.getNodeByIndex(1));
// test.append('test3');
// test.addNode(3, 'addNode');
// //console.log('index == >', test.getNodeByIndex(2));
//test.remove(1);
// // console.log(test);

console.log(test.getAllNode());
