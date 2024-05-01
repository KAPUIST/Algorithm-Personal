let data = [2, 14, 6, 1, 3, 9];

function bubbleSort(array) {
  // 길이를 가짐
  let arr = array.length;
  for (let i = 0; i < arr; i++) {
    for (let j = 0; j < arr - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
}
bubbleSort(data);
