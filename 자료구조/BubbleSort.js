let data = [2, 14, 6, 1, 3, 9];

function bubbleSort(array) {
  let leng = array.length;

  for (let i = 0; i < leng; i++) {
    //1회 / i = 0 , leng = 4
    for (let j = 0; j < leng - i - 1; j++) {
      //1회 순회시 가장큰수는 맨뒤로 간다
      //2회 순회시 맨뒤는 이미 가장큰수 그렇기에 -1 하여 불필요한 연산을 1회줄임
      //1회 / j = 0 , 5 -0- 1  = 4
      //
      //앞이 뒤보다크면
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
  return array;
}
bubbleSort(data);
