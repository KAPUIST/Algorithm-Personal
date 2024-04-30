let arr = [4, 6, 2, 9, 1];
console.log(arr.length);

function selectionSort(array) {
  //배열의 길이를 구합니다.
  let l = array.length;
  for (let i = 0; i < l - 1; i++) {
    let minIndex = i;
    //1회 array[minIndex] = 1
    for (let j = i + 1; j < l; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    let temp = array[i]; // 4
    array[i] = array[minIndex]; //1
    array[minIndex] = temp;
  }
  console.log(array);
}
selectionSort(arr);
