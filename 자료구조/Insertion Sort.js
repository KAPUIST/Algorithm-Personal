//삽입정렬.
function insertionSort(array) {
  let arr = array.length;

  for (let i = 1; i < arr; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j - 1] > array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      } else {
        break;
      }
    }
  }
  console.log(array);
}

insertionSort([100, 56, -3, 32, 44]);
