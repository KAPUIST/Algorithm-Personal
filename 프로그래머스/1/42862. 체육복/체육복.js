function solution(n, lost, reserve) {
    let answer = new Array(n).fill(1)
    let cnt = 0
    for(let i = 0; i< reserve.length; i++){
        answer[reserve[i]-1] +=1
    }
    //옷두벌이면 2를 가지고있음
     for(let i = 0; i < lost.length; i++){ // lost 를 순회하며 체육복 수를 -1
        answer[lost[i]-1] -= 1
    }
    for(let i = 0; i < n; i++){ 
        if (answer[i] == 2 && answer[i+1] == 0 || answer[i+1] == 2 && answer[i] == 0){
            answer[i] = 1
            answer[i+1] = 1
        }
    }
        for(let i = 0; i < answer.length; i++){
        (answer[i] >= 1 ? cnt += 1 : null)
    }
    return cnt
}