function solution(number) {
  let count = 0; // 삼총사의 수를 셀 변수
  function find(start, comb) {
    if (comb.length === 3) {
      if (comb[0] + comb[1] + comb[2] === 0) {
        count++;
      }
      return;
    }

    for (let i = start; i < number.length; i++) {
      find(i + 1, comb.concat(number[i]));
    }
  }
  find(0, []);
  return count;
}

// 테스트 예제
console.log(solution([-2, 3, 0, 2, -5])); // 2
