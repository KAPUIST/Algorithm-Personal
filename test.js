function solution(n) {
  let array = n.toString().split('');
  let answer = array.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc + Number(cur);
  }, 0);
  return answer;
}
solution(123);
