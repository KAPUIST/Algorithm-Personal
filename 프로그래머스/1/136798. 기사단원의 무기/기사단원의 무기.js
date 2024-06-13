function solution(number, limit, power) {
  let answer = 0;

  // 약수의 개수를 계산하는 함수
  const getDivisorCount = (num) => {
    let divisorCount = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisorCount++; // i는 num의 약수
        if (num / i != i) divisorCount++; 
      }
    }
    return divisorCount;
  };

 
  for (let j = 1; j <= number; j++) {
    let count = getDivisorCount(j);
    answer += count > limit ? power : count;
  }

  return answer;
}