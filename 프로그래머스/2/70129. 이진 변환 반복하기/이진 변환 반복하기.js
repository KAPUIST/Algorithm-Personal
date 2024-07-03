function solution(s) {
  let transformationCount = 0;
  let removedZerosCount = 0;

  while (s !== "1") {
    // 1. 문자열에서 모든 '0'을 제거합니다.
    let zeroCount = 0;
    for (let char of s) {
      if (char === '0') {
        zeroCount++;
      }
    }
    removedZerosCount += zeroCount;
    
    // '0'을 제거한 문자열을 만듭니다.
    s = s.replace(/0/g, '');

    // 2. 남은 문자열의 길이를 구합니다.
    const length = s.length;

    // 3. 그 길이를 이진수로 변환합니다.
    s = length.toString(2);

    // 4. 변환 횟수를 증가시킵니다.
    transformationCount++;
  }

  // 변환 횟수와 제거된 '0'의 개수를 반환합니다.
  return [transformationCount, removedZerosCount];
}
