let answer = ["b", "a", "b", "a", "a"];
function solution(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "b") {
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] === "a") {
          count++;
        }
      }
    }
  }
  console.log(count);
}

solution(answer);
