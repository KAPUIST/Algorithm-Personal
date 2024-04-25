function solution(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let index = Math.floor(sortedArray.length / 2);
  console.log(sortedArray);
  console.log(sortedArray[index]);
}

solution([1, 2, 7, 10, 11, 1, 23, 3, 4, 25425, 12]);
