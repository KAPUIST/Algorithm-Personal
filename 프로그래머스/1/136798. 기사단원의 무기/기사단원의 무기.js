function solution(number, limit, power) {
    var answer = 0;
    let divisor = [];
    //1부터 number까지의 수의 모든 약수가 필요함 
    //약수 구하기
    for(let j = 1; j <= number; j++){
        divisor.push(j)
    }
    //[1,2,3,4,5]
    //새로운 배열을 리턴하도록
       divisor = divisor.map((el) => {
    let tempArr = [];
    for (let i = 1; i <= Math.sqrt(el); i++) {
      if (el % i === 0) {
        tempArr.push(i);
        if (el / i != i) tempArr.push(el / i);
      }
    }
    if (limit < tempArr.length) {
      return power;
    } else {
      return tempArr.length;
    }
  });
    answer = divisor.reduce((acc,cur) => {
        return acc+cur
    })
    //[1,2,2,2,2,2]
    return answer;
}