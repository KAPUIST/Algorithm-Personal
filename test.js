function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let Atime = Number(A.split(":")[0]) * 60 + Number(A.split(":")[1]);
  let Btime = Number(B.split(":")[0]) * 60 + Number(B.split(":")[1]);

  if (Atime > Btime) {
    Btime = Btime + 60 * 24;
    // 0 15 30 45
    return parseInt(Btime / 15) - Math.ceil(Atime / 15);
  } else if (Atime < Btime) {
    return parseInt(Btime / 15) - Math.ceil(Atime / 15);
  } else {
    return 0;
  }
}
//Atime === Btime || Btime - Atime < 15
console.log(solution("12:17", "12:50"));

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j < S.length; j++) {
      for (let k = 0; k < S[i].length; k++) {
        if (S[i][k] === S[j][k]) {
          return [i, j, k];
        }
      }
    }
  }
  return [];
}

function solution(arr) {
  if (arr.length <= 2) {
    return arr.length;
  } else {
    let temp = 2;
    let answer = 2;
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] === arr[i - 2]) {
        answer = answer + 1;
      } else {
        answer = 2;
      }
    }
    // answer = Math.max(answer, temp);
    console.log(answer);
  }
}

solution([7, -5, -5, -5, 7, -1, 7]);
